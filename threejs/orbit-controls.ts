import { MutableRefObject } from "react";
import { AmbientLight, CapsuleGeometry, Color, CylinderGeometry, DirectionalLight, FogExp2, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function OrbitControlsExample(mountRef: MutableRefObject<HTMLDivElement>) {

    let camera, controls: OrbitControls, scene, renderer: WebGLRenderer = new WebGLRenderer();

    function init() {
        scene = new Scene();
        scene.background = new Color(0xcccccc);
        scene.fog = new FogExp2(0xcccccc, 0.002);
        renderer = new WebGLRenderer({
            antialias: true 
        });
        renderer.setSize(mountRef.current.clientWidth, 800);
        camera = new PerspectiveCamera(60, mountRef.current.clientWidth / 600, 1, 1000);
        camera.position.set(400, 200, 0);
        camera.lookAt(0, 0, 0);
        // controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.listenToKeyEvents(mountRef.current); // optional
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 100;
        controls.maxDistance = 500;
        controls.maxPolarAngle = Math.PI;
        // world
        const geometry = new CapsuleGeometry(5, 10, 10, 20);
        const material = new MeshPhongMaterial({
            color: 0xdddddd, flatShading: true 
        });
        for (let i = 0; i < 500; i += 1) {
            const mesh = new Mesh(geometry, material);
            mesh.position.x = Math.random() * 1600 - 800;
            mesh.position.y = 0;
            mesh.position.z = Math.random() * 1600 - 800;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add(mesh);
        }
        const mesh = new Mesh(new CylinderGeometry( 0, 10, 30, 4, 1 ), material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 0;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
        // lights
        const dirLight1 = new DirectionalLight(0xffffff);
        dirLight1.position.set(1, 1, 1);
        scene.add(dirLight1);
        const dirLight2 = new DirectionalLight(0x002288);
        dirLight2.position.set(-1, -1, -1);
        scene.add(dirLight2);
        const ambientLight = new AmbientLight(0x222222);
        scene.add(ambientLight);
    }

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        render();
    }

    function render() {
        renderer.render(scene, camera);
    }

    init();
    // render(); // remove when using next line for animation loop (requestAnimationFrame)
    animate();
    
    return renderer;
}