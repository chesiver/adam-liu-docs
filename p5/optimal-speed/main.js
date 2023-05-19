
import { Point } from '../common'
import { Points } from './points'

const points = new Points();
const sPoints = new Points();
const rPoints = new Points();
const uPoints = new Points();
let nLevels = 5;
let nSamples = 200;
let showNumber = 0;
let isShowCurvatures = false, isShownAcceleration = false;
let timeStep = 1.0 / 30;
let lapTime = 0;
let timing = '';
let ms = 0, me = 0;
const maxAcceleration = 100;

function init(p5) {
    Point.prototype.p5 = p5;
    Points.prototype.p5 = p5;
    p5.frameRate(30);
    const str =
        `10
457.0,54.0
769.3509,231.80148
630.981,363.80148
652.981,482.19855
556.3508,615.19855
378.99997,511.0
243.6491,615.1985
147.01895,482.19843
339.01898,407.80145
153.64911,87.8015
`;
    points.loadPoints(str.split("\n"));
    points.copyInto(sPoints);
    nSamples = sPoints.subdivide(nLevels);
    sPoints.copyInto(rPoints);
    sPoints.resample(uPoints, nSamples)
}

function draw(p5) {
    p5.background(p5.color('white'));

    if (p5.mouseIsPressed) {
        console.log('mouse is pressed')
        points.copyInto(sPoints); 
        sPoints.subdivide(nLevels); // subdivides S 'levels' times
    }

    p5.fill('yellow'); p5.stroke('lgrey'); p5.strokeWeight(30);
    sPoints.drawCurve();
    p5.noFill(); p5.stroke('black'); p5.strokeWeight(2);
    sPoints.drawCurve();

    rPoints.drawPoints('purple')
    sPoints.drawPoints('green')

    showNumber += 1;
    if (showNumber >= nSamples) {
        showNumber = 0;
        me = p5.millis();
        lapTime = (me - ms) / 1000;
        timing = `${nSamples} samples. Lap time = ${lapTime.toFixed(2)} seconds.`
        ms = me;
    }

    if (isShowCurvatures) {
        p5.stroke('magenta'); p5.strokeWeight(1);
        rPoints.showCurvatures();
    }
    if (isShownAcceleration) {
        p5.stroke('pink'); p5.strokeWeight(1);
        rPoints.showAccelerations();
    }

    p5.fill('blue'); p5.text(timing, 10, 20 + 2 * 10); p5.noFill();
    p5.fill('magenta'); p5.noStroke(); rPoints.getPoint(showNumber).show(5);
    p5.fill('red'); p5.noStroke(); uPoints.getPoint(showNumber).show(7);

    points.showPointsWithIndex();
}

function mouseClicked(p5) {

}

function mousePressed(p5) {
    points.pickClosest(new Point(p5.mouseX, p5.mouseY))
    if (p5.keyIsPressed) {
        if(p5.key == 'a') {
            points.AddPoint(p5.mouseX, p5.mouseY);
        } // appends vertex after the last one
    }
}

function mouseDragged(p5) {
    if(!p5.keyIsPressed) {
        points.dragPicked();
    }
}

function keyPressed(p5) {
    switch (p5.key) {
        case 's': 
            points.copyInto(sPoints); 
            nSamples = sPoints.subdivide(nLevels); // subdivides S 'levels' times
            sPoints.copyInto(rPoints); 
            sPoints.resample(uPoints, nSamples);
            showNumber = 0;
            break;
        case ')':
            isShowCurvatures = !isShowCurvatures;
            rPoints.setCurvatures();
            break;
        case '*':
            isShownAcceleration = !isShownAcceleration;
            rPoints.setAccelerations();
            break;
    }
}

export {
    init,
    draw,
    mouseClicked,
    keyPressed,
    mousePressed,
    mouseDragged,
}