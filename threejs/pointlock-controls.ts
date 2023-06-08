import { MutableRefObject } from "react";
import { BoxGeometry, Camera, Color, Float32BufferAttribute, Fog, HemisphereLight, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, PlaneGeometry, Raycaster, SRGBColorSpace, Scene, Vector3, WebGLRenderer } from "three";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export default function PointlockControlsExample(mountRef: MutableRefObject<HTMLDivElement>) {
    const width = mountRef.current.clientWidth, height = 800;
    let camera: Camera, scene, renderer = new WebGLRenderer(), controls: PointerLockControls;
    const objects: Mesh[] = [];
    let raycaster: Raycaster;
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let canJump = false;
    let prevTime = performance.now();
    const velocity = new Vector3();
    const direction = new Vector3();
    const vertex = new Vector3();
    const color = new Color();
    init();
    animate();
    function init() {

        camera = new PerspectiveCamera(75, width / height, 1, 1000);
        camera.position.y = 10;
        scene = new Scene();
        scene.background = new Color(0xffffff);
        scene.fog = new Fog(0xffffff, 0, 750);

        const light = new HemisphereLight(0xeeeeff, 0x777788, 0.75);
        light.position.set(0.5, 1, 0.75);
        scene.add(light);

        controls = new PointerLockControls(camera, mountRef.current);
        
        mountRef.current.addEventListener('click', function () {
            controls.lock();
        });
        scene.add(controls.getObject());
        const onKeyDown = function (event) {
            console.log('event', event)
            switch (event.code) {
            case 'ArrowUp': 
            case 'KeyW':
                moveForward = true;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward = true;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
            }
        };

        const onKeyUp = function (event) {
            switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                moveForward = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                moveBackward = false;
                break;
            case 'ArrowRight':
            case 'KeyD':
                moveRight = false;
                break;
            }
        };
        
        mountRef.current.addEventListener('keydown', onKeyDown);
        mountRef.current.addEventListener('keyup', onKeyUp);

        raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);

        // floor
        let floorGeometry = new PlaneGeometry(2000, 2000, 100, 100);
        floorGeometry.rotateX(-Math.PI / 2);
        
        // vertex displacement
        let position = floorGeometry.attributes.position;
        for (let i = 0, l = position.count; i < l; i++) {
            vertex.fromBufferAttribute(position, i);
            vertex.x += Math.random() * 20 - 10;
            vertex.y += Math.random() * 2;
            vertex.z += Math.random() * 20 - 10;
            position.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
        floorGeometry = floorGeometry.toNonIndexed() as PlaneGeometry; // ensure each face has unique vertices
        position = floorGeometry.attributes.position;
        const colorsFloor: number[] = [];

        for (let i = 0, l = position.count; i < l; i++) {
            color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75, SRGBColorSpace);
            colorsFloor.push(color.r, color.g, color.b);
        }

        floorGeometry.setAttribute('color', new Float32BufferAttribute(colorsFloor, 3));
        const floorMaterial = new MeshBasicMaterial({ vertexColors: true });
        const floor = new Mesh(floorGeometry, floorMaterial);
        scene.add(floor);

        // objects
        const boxGeometry = new BoxGeometry(20, 20, 20).toNonIndexed();
        position = boxGeometry.attributes.position;
        const colorsBox: number[] = [];
        for (let i = 0, l = position.count; i < l; i += 1) {
            color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75, SRGBColorSpace);
            colorsBox.push(color.r, color.g, color.b);

        }
        boxGeometry.setAttribute('color', new Float32BufferAttribute(colorsBox, 3));
        for (let i = 0; i < 500; i += 1) {
            const boxMaterial = new MeshPhongMaterial({ specular: 0xffffff, flatShading: true, vertexColors: true });
            boxMaterial.color.setHSL(Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75, SRGBColorSpace);
            const box = new Mesh(boxGeometry, boxMaterial);
            box.position.x = Math.floor(Math.random() * 20 - 10) * 20;
            box.position.y = Math.floor(Math.random() * 20) * 20 + 10;
            box.position.z = Math.floor(Math.random() * 20 - 10) * 20;
            scene.add(box);
            objects.push(box);
        }
        //
        renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);
    }
    
    function animate() {
        requestAnimationFrame(animate);
        const time = performance.now();
        if (controls.isLocked === true) {
            raycaster.ray.origin.copy(controls.getObject().position);
            raycaster.ray.origin.y -= 10;
            const intersections = raycaster.intersectObjects(objects, false);
            const onObject = intersections.length > 0;
            const delta = (time - prevTime) / 1000;
            velocity.x -= velocity.x * 10.0 * delta;
            velocity.z -= velocity.z * 10.0 * delta;
            velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
            direction.z = Number(moveForward) - Number(moveBackward);
            direction.x = Number(moveRight) - Number(moveLeft);
            direction.normalize(); // this ensures consistent movements in all directions
            if (moveForward || moveBackward) velocity.z += direction.z * 400.0 * delta;
            if (moveLeft || moveRight) velocity.x += direction.x * 400.0 * delta;
            if (onObject === true) {
                velocity.y = Math.max(0, velocity.y);
                canJump = true;
            }
            controls.moveRight(velocity.x * delta);
            controls.moveForward(velocity.z * delta);
            controls.getObject().position.y += (velocity.y * delta); // new behavior
            if (controls.getObject().position.y < 10) {
                velocity.y = 0;
                controls.getObject().position.y = 10;
                canJump = true;
            }
        }
        prevTime = time;
        renderer.render(scene, camera);
    }

    return renderer;
}