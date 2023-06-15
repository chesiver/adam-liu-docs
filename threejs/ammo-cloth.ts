import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { AmbientLight, BoxGeometry, Clock, Color, DirectionalLight, DoubleSide, Mesh, MeshLambertMaterial, MeshPhongMaterial, PerspectiveCamera, PlaneGeometry, Quaternion, RepeatWrapping, SRGBColorSpace, Scene, TextureLoader, Vector3, WebGLRenderer } from "three";
import { default as AmmoLib } from 'ammo.js/builds/ammo';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default async function AmmoClothExample(mountRef: MutableRefObject<HTMLDivElement>, setInfo: Dispatch<SetStateAction<string>>) {
    setInfo('Ammo.js physics soft body cloth demo. Press Q or A to move the arm.');
    const Ammo = await AmmoLib();

    // Graphics variables
    const container = mountRef.current;
    const width = container.clientWidth, height = 800;
    let stats;
    let camera: PerspectiveCamera, controls: OrbitControls, scene: Scene, renderer;
    let textureLoader: TextureLoader;
    const clock = new Clock();

    // Physics variables
    const gravityConstant = -9.8;
    let physicsWorld;
    const rigidBodies: Mesh[] = [];
    const margin = 0.05;
    let hinge;
    let cloth: Mesh<PlaneGeometry, MeshLambertMaterial>;
    let transformAux1;

    let armMovement = 0;

    init();
    animate();

    function init() {
        initGraphics();
        initPhysics();
        createObjects();
        initInput();
    }

    function initGraphics() {
        camera = new PerspectiveCamera(60, width / height, 0.2, 2000);
        scene = new Scene();
        scene.background = new Color(0xbfd1e5);
        camera.position.set(-12, 7, 4);

        renderer = new WebGLRenderer();
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 2, 0);
        controls.update();

        textureLoader = new TextureLoader();

        const ambientLight = new AmbientLight(0x404040);
        scene.add(ambientLight);

        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(-7, 10, 15);
        light.castShadow = true;
        const d = 10;
        light.shadow.camera.left = -d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = -d;
        light.shadow.camera.near = 2;
        light.shadow.camera.far = 50;
        light.shadow.mapSize.x = 1024;
        light.shadow.mapSize.y = 1024;
        light.shadow.bias = -0.003;
        scene.add(light);

        stats = new Stats();
        container.appendChild(stats.domElement);

        window.addEventListener('resize', onWindowResize);

    }

    // Physics configuration
    function initPhysics() {
        const collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
        const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
        const broadphase = new Ammo.btDbvtBroadphase();
        const solver = new Ammo.btSequentialImpulseConstraintSolver();
        const softBodySolver = new Ammo.btDefaultSoftBodySolver();
        physicsWorld = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);
        physicsWorld.setGravity(new Ammo.btVector3(0, gravityConstant, 0));
        physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, gravityConstant, 0));
        transformAux1 = new Ammo.btTransform();
    }

    function createObjects() {
        const pos = new Vector3();
        const quat = new Quaternion();
        // Ground
        pos.set(0, -0.5, 0);
        quat.set(0, 0, 0, 1);
        const ground = createParalellepiped(40, 1, 40, 0, pos, quat, new MeshPhongMaterial({ color: 0xFFFFFF }));
        ground.castShadow = true;
        ground.receiveShadow = true;
        textureLoader.load('/threejs/textures/grid.png', function (texture) {
            texture.colorSpace = SRGBColorSpace;
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;
            texture.repeat.set(40, 40);
            ground.material.map = texture;
            ground.material.needsUpdate = true;
        });
        // Wall
        const brickMass = 0.5;
        const brickLength = 1.2;
        const brickDepth = 0.6;
        const brickHeight = brickLength * 0.5;
        const numBricksLength = 6;
        const numBricksHeight = 8;
        const z0 = -numBricksLength * brickLength * 0.5;
        pos.set(0, brickHeight * 0.5, z0);
        quat.set(0, 0, 0, 1);
        for (let j = 0; j < numBricksHeight; j += 1) {
            const oddRow = (j % 2) == 1;
            pos.z = z0;
            if (oddRow) {
                pos.z -= 0.25 * brickLength;
            }
            const nRow = oddRow ? numBricksLength + 1 : numBricksLength;
            for (let i = 0; i < nRow; i += 1) {
                let brickLengthCurrent = brickLength;
                let brickMassCurrent = brickMass;
                if (oddRow && (i == 0 || i == nRow - 1)) {
                    brickLengthCurrent *= 0.5;
                    brickMassCurrent *= 0.5;
                }
                const brick = createParalellepiped(brickDepth, brickHeight, brickLengthCurrent, brickMassCurrent, pos, quat, createMaterial());
                brick.castShadow = true;
                brick.receiveShadow = true;
                if (oddRow && (i == 0 || i == nRow - 2)) {
                    pos.z += 0.75 * brickLength;
                } else {
                    pos.z += brickLength;
                }
            }
            pos.y += brickHeight;
        }
        // The cloth
        // Cloth graphic object
        const clothWidth = 4;
        const clothHeight = 3;
        const clothNumSegmentsZ = clothWidth * 5;
        const clothNumSegmentsY = clothHeight * 5;
        const clothPos = new Vector3(-3, 3, 2);

        const clothGeometry = new PlaneGeometry(clothWidth, clothHeight, clothNumSegmentsZ, clothNumSegmentsY);
        clothGeometry.rotateY(Math.PI * 0.5);
        clothGeometry.translate(clothPos.x, clothPos.y + clothHeight * 0.5, clothPos.z - clothWidth * 0.5);

        const clothMaterial = new MeshLambertMaterial({ color: 0xFFFFFF, side: DoubleSide });
        cloth = new Mesh(clothGeometry, clothMaterial);
        cloth.castShadow = true;
        cloth.receiveShadow = true;
        scene.add(cloth);
        textureLoader.load('/threejs/textures/grid.png', function (texture) {
            texture.colorSpace = SRGBColorSpace;
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;
            texture.repeat.set(clothNumSegmentsZ, clothNumSegmentsY);
            cloth.material.map = texture;
            cloth.material.needsUpdate = true;
        });

        // Cloth physic object
        const softBodyHelpers = new Ammo.btSoftBodyHelpers();
        const clothCorner00 = new Ammo.btVector3(clothPos.x, clothPos.y + clothHeight, clothPos.z);
        const clothCorner01 = new Ammo.btVector3(clothPos.x, clothPos.y + clothHeight, clothPos.z - clothWidth);
        const clothCorner10 = new Ammo.btVector3(clothPos.x, clothPos.y, clothPos.z);
        const clothCorner11 = new Ammo.btVector3(clothPos.x, clothPos.y, clothPos.z - clothWidth);
        const clothSoftBody = softBodyHelpers.CreatePatch(physicsWorld.getWorldInfo(), clothCorner00, clothCorner01, clothCorner10, clothCorner11, clothNumSegmentsZ + 1, clothNumSegmentsY + 1, 0, true);
        const sbConfig = clothSoftBody.get_m_cfg();
        sbConfig.set_viterations(10);
        sbConfig.set_piterations(10);

        clothSoftBody.setTotalMass(0.9, false);
        Ammo.castObject(clothSoftBody, Ammo.btCollisionObject).getCollisionShape().setMargin(margin * 3);
        physicsWorld.addSoftBody(clothSoftBody, 1, -1);
        cloth.userData.physicsBody = clothSoftBody;
        // Disable deactivation
        clothSoftBody.setActivationState(4);

        // The base
        const armMass = 2;
        const armLength = 3 + clothWidth;
        const pylonHeight = clothPos.y + clothHeight;
        const baseMaterial = new MeshPhongMaterial({ color: 0x606060 });
        pos.set(clothPos.x, 0.1, clothPos.z - armLength);
        quat.set(0, 0, 0, 1);
        const base = createParalellepiped(1, 0.2, 1, 0, pos, quat, baseMaterial);
        base.castShadow = true;
        base.receiveShadow = true;
        pos.set(clothPos.x, 0.5 * pylonHeight, clothPos.z - armLength);
        const pylon = createParalellepiped(0.4, pylonHeight, 0.4, 0, pos, quat, baseMaterial);
        pylon.castShadow = true;
        pylon.receiveShadow = true;
        pos.set(clothPos.x, pylonHeight + 0.2, clothPos.z - 0.5 * armLength);
        const arm = createParalellepiped(0.4, 0.4, armLength + 0.4, armMass, pos, quat, baseMaterial);
        arm.castShadow = true;
        arm.receiveShadow = true;

        // Glue the cloth to the arm
        const influence = 0.5;
        clothSoftBody.appendAnchor(0, arm.userData.physicsBody, false, influence);
        clothSoftBody.appendAnchor(clothNumSegmentsZ, arm.userData.physicsBody, false, influence);

        // Hinge constraint to move the arm
        const pivotA = new Ammo.btVector3(0, pylonHeight * 0.5, 0);
        const pivotB = new Ammo.btVector3(0, -0.2, -armLength * 0.5);
        const axis = new Ammo.btVector3(0, 1, 0);
        hinge = new Ammo.btHingeConstraint(pylon.userData.physicsBody, arm.userData.physicsBody, pivotA, pivotB, axis, axis, true);
        physicsWorld.addConstraint(hinge, true);

    }

    function createParalellepiped(sx, sy, sz, mass, pos, quat, material) {
        const threeObject = new Mesh(new BoxGeometry(sx, sy, sz, 1, 1, 1), material);
        const shape = new Ammo.btBoxShape(new Ammo.btVector3(sx * 0.5, sy * 0.5, sz * 0.5));
        shape.setMargin(margin);
        createRigidBody(threeObject, shape, mass, pos, quat);
        return threeObject;
    }

    function createRigidBody(threeObject: Mesh, physicsShape, mass, pos: Vector3, quat: Quaternion) {
        threeObject.position.copy(pos);
        threeObject.quaternion.copy(quat);
        const transform = new Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
        transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
        const motionState = new Ammo.btDefaultMotionState(transform);
        const localInertia = new Ammo.btVector3(0, 0, 0);
        physicsShape.calculateLocalInertia(mass, localInertia);
        const rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
        const body = new Ammo.btRigidBody(rbInfo);
        threeObject.userData.physicsBody = body;
        scene.add(threeObject);
        if (mass > 0) {
            rigidBodies.push(threeObject);
            // Disable deactivation
            body.setActivationState(4);
        }
        physicsWorld.addRigidBody(body);
    }

    function createRandomColor() {
        return Math.floor(Math.random() * (1 << 24));
    }

    function createMaterial() {
        return new MeshPhongMaterial({ color: createRandomColor() });
    }

    function initInput() {
        window.addEventListener('keydown', function (event) {
            switch (event.key) {
            case 'q':
                armMovement = 1;
                break;
            case 'a':
                armMovement = -1;
                break;
            }
        });
        window.addEventListener('keyup', function () {
            armMovement = 0;
        });
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
        stats.update();
    }

    function render() {
        const deltaTime = clock.getDelta();
        updatePhysics(deltaTime);
        renderer.render(scene, camera);
    }

    function updatePhysics(deltaTime) {
        // Hinge control
        hinge.enableAngularMotor(true, 0.8 * armMovement, 50);

        // Step world
        physicsWorld.stepSimulation(deltaTime, 10);

        // Update cloth
        const softBody = cloth.userData.physicsBody;
        const clothPositions = cloth.geometry.attributes.position.array as number[];
        const numVerts = clothPositions.length / 3;
        const nodes = softBody.get_m_nodes();
        let indexFloat = 0;
        for (let i = 0; i < numVerts; i++) {
            const node = nodes.at(i);
            const nodePos = node.get_m_x();
            clothPositions[indexFloat++] = nodePos.x();
            clothPositions[indexFloat++] = nodePos.y();
            clothPositions[indexFloat++] = nodePos.z();
        }

        cloth.geometry.computeVertexNormals();
        cloth.geometry.attributes.position.needsUpdate = true;
        cloth.geometry.attributes.normal.needsUpdate = true;

        // Update rigid bodies
        for (let i = 0, il = rigidBodies.length; i < il; i++) {
            const objThree = rigidBodies[i];
            const objPhys = objThree.userData.physicsBody;
            const ms = objPhys.getMotionState();
            if (ms) {
                ms.getWorldTransform(transformAux1);
                const p = transformAux1.getOrigin();
                const q = transformAux1.getRotation();
                objThree.position.set(p.x(), p.y(), p.z());
                objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
            }
        }

    }

    return renderer;
}