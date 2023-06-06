import { MutableRefObject } from "react";
import { AnimationMixer, BackSide, Clock, Color, DirectionalLight, DirectionalLightHelper, Fog, HemisphereLight, HemisphereLightHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, Scene, ShaderMaterial, SphereGeometry, WebGLRenderer } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import vertexShader from './shaders/hemisphere-light/vertex-shader.vs';
import fragmentShader from './shaders/hemisphere-light/fragment-shader.fs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function HemisphereLightExample(mountRef: MutableRefObject<HTMLDivElement>) {
    const container = mountRef.current;
    const width = container.clientWidth, height = 600;
    let camera, controls: OrbitControls, scene, renderer: WebGLRenderer = new WebGLRenderer();
    const mixers: AnimationMixer[] = [];
    const clock = new Clock();
    init();
    animate();
    function init() {
        camera = new PerspectiveCamera(30, width / height, 1, 5000);
        camera.position.set(0, 0, 250);
        scene = new Scene();
        scene.background = new Color().setHSL(0.6, 0, 1);
        scene.fog = new Fog(scene.background, 1, 5000);
        // LIGHTS
        const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 50, 0);
        scene.add(hemiLight);
        const hemiLightHelper = new HemisphereLightHelper(hemiLight, 10);
        scene.add(hemiLightHelper);
        //
        const dirLight = new DirectionalLight(0xffffff, 1);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-1, 1.75, 1);
        dirLight.position.multiplyScalar(30);
        scene.add(dirLight);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        const d = 50;
        dirLight.shadow.camera.left = -d;
        dirLight.shadow.camera.right = d;
        dirLight.shadow.camera.top = d;
        dirLight.shadow.camera.bottom = -d;
        dirLight.shadow.camera.far = 3500;
        dirLight.shadow.bias = -0.0001;
        const dirLightHelper = new DirectionalLightHelper(dirLight, 10);
        scene.add(dirLightHelper);
        // GROUND
        const groundGeo = new PlaneGeometry(10000, 10000);
        const groundMat = new MeshLambertMaterial({ color: 0xffffff });
        groundMat.color.setHSL(0.095, 1, 0.75);
        const ground = new Mesh(groundGeo, groundMat);
        ground.position.y = -33;
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);
        // SKYDOME
        const uniforms = {
            'topColor': { value: new Color(0x0077ff) },
            'bottomColor': { value: new Color(0xffffff) },
            'offset': { value: 33 },
            'exponent': { value: 0.6 }
        };
        uniforms['topColor'].value.copy(hemiLight.color);
        scene.fog.color.copy(uniforms['bottomColor'].value);
        const skyGeo = new SphereGeometry(4000, 32, 15);
        const skyMat = new ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: BackSide
        });
        const sky = new Mesh(skyGeo, skyMat);
        scene.add(sky);
        const loader = new GLTFLoader();
        loader.load('/threejs/models/Flamingo.glb', function (gltf) {
            const mesh = gltf.scene.children[0];
            const s = 0.35;
            mesh.scale.set(s, s, s);
            mesh.position.y = 15;
            mesh.rotation.y = -1;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            scene.add(mesh);
            const mixer = new AnimationMixer(mesh);
            mixer.clipAction(gltf.animations[0]).setDuration(1).play();
            mixers.push(mixer);
        });
        // Render 
        renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        const params = {
            toggleHemisphereLight: function () {
                hemiLight.visible = !hemiLight.visible;
                hemiLightHelper.visible = !hemiLightHelper.visible;
            },
            toggleDirectionalLight: function () {
                dirLight.visible = !dirLight.visible;
                dirLightHelper.visible = !dirLightHelper.visible;
            }
        };
        // Control
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 500;
        controls.maxPolarAngle = Math.PI / 2;
        // GUI
        const gui = new GUI({
            container: container,
        });
        gui.domElement.style.position = 'fixed';
        gui.add(params, 'toggleHemisphereLight').name('toggle hemisphere light');
        gui.add(params, 'toggleDirectionalLight').name('toggle directional light');
        gui.open();
    }
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        render();
        // stats.update();
    }
    function render() {
        const delta = clock.getDelta();
        for (let i = 0; i < mixers.length; i++) {
            mixers[i].update(delta);
        }
        renderer.render(scene, camera);
    }
    return renderer;
}
