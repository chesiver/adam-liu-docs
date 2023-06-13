import type P5 from 'p5'
import { Base } from '../common';
import { Basement } from './basement';
import { showBlock } from './dispaly';

const width = 800;
const height = 800;

const input = 
`21
9.0,272.0
50.0,168.0
114.0,65.0
320.0,35.0
473.0,55.0
567.0,133.0
632.0,211.0
654.0,330.0
643.0,438.0
584.0,499.0
545.0,547.0
491.0,579.0
450.0,621.0
359.0,608.0
315.0,658.0
245.0,665.0
220.0,645.0
118.0,675.0
25.0,568.0
16.0,479.0
31.0,402.0
`

const basement = new Basement();
basement.loadPts(input);

function setup(p5: P5, parentRef: Element) {
    const cv = p5.createCanvas(width, height, p5.WEBGL);
    cv.parent(parentRef);
    Base.setP5(p5);
    p5.frameRate(30);
    p5.textureMode(p5.NORMAL);
}

const PI = Math.PI;
const TWO_PI = 2 * Math.PI;
const dz = -500; // distance to camera. Manipulated with wheel or when 
let rx = -0.06 * TWO_PI, ry = -0.04 * TWO_PI;    // view angles manipulated when space pressed but not mouse
const w = 800; // half-size of the cube containing the scene displayed

function draw(p5: P5) {
    p5.background(255);
    p5.push();
    {
        p5.camera(0, 0, 100, 0, 0, 0, 0, 1, 0);
        p5.translate(0, 0, dz); // puts origin of model at screen center and moves forward/away by dz
        p5.lights();
        // p5.rotateX(rx);
        // p5.rotateY(ry); // rotates the model around the new origin (center of screen)
        // p5.rotateX(PI / 2); // rotates frame around X to make X and Y basis vectors parallel to the floor
        p5.noStroke();
        p5.color('grey');
        p5.push(); p5.translate(0, 0, -w / 2 - 1.5); p5.box(w, w, 1); p5.pop(); // draws floor as thin plate
        p5.noFill(); p5.strokeWeight(1); p5.stroke('black'); showBlock(p5, w, w, w, 0, 0, 0 ,0);
        p5.noStroke();
        p5.push();
        {
            p5.translate(-width / 2, -height / 2, -w / 2 - 0.5);
            basement.drawPoints();
        }
        p5.pop();
    }
    p5.pop();
}

function mouseMoved(p5: P5) {
    if (p5.keyIsPressed && p5.key === 't') {
        rx -= PI * p5.movedX / height;
        ry += PI * p5.movedX / width;
    }
}

export {
    setup,
    draw,
    mouseMoved,
}