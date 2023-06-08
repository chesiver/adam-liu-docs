import { MutableRefObject } from "react";
import { AmbientLight, Color, ConeGeometry, DirectionalLight, FogExp2, Mesh, MeshPhongMaterial, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

export default function TrackballControlsExample(mountRef: MutableRefObject<HTMLDivElement>) {

    const width = mountRef.current.clientWidth, height = 800;
    let perspectiveCamera, orthographicCamera, controls, scene, renderer: WebGLRenderer = new WebGLRenderer(), stats;
    const params = {
        orthographicCamera: false
    };
    const frustumSize = 400;
    init();
    animate();
            
    function init() {
        const aspect = width / height;
        perspectiveCamera = new PerspectiveCamera(60, aspect, 1, 1000);
        perspectiveCamera.position.z = 500;
        orthographicCamera = new OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
        orthographicCamera.position.z = 500;
        // world
        scene = new Scene();
        scene.background = new Color(0xcccccc);
        scene.fog = new FogExp2(0xcccccc, 0.002);

        const geometry = new ConeGeometry(5, 10, 8, 1);
        const material = new MeshPhongMaterial({ color: 0xffffff, flatShading: true });
        for (let i = 0; i < 500; i += 1) {
            const mesh = new Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 1000;
            mesh.position.y = (Math.random() - 0.5) * 1000;
            mesh.position.z = (Math.random() - 0.5) * 1000;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add(mesh);
        }
        // lights
        const dirLight1 = new DirectionalLight(0xffffff);
        dirLight1.position.set(1, 1, 1);
        scene.add(dirLight1);
        const dirLight2 = new DirectionalLight(0x002288);
        dirLight2.position.set(-1, -1, -1);
        scene.add(dirLight2);
        const ambientLight = new AmbientLight(0x222222);
        scene.add(ambientLight);
        // renderer
        renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);
        createControls(perspectiveCamera);
    }

    function createControls(camera) {
        controls = new TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.keys = ['KeyA', 'KeyS', 'KeyD'];
    }

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        // stats.update();
        render();
    }

    function render() {
        const camera = (params.orthographicCamera) ? orthographicCamera : perspectiveCamera;
        renderer.render(scene, camera);
    }
    
    return renderer;
}