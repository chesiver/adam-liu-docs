import { Point, CopyPoint, MoveByDistanceTowards, Dist, Dist2, Unit, Det, Rotate, VectorFromPoints, Sum, Norm } from '../common'
import { CentripetalMidcourseCorrected } from './interpolation'
import { ShowPointWithVector } from '../util'

const maxAcceleration = 100;

class Points {
    constructor() {
        this.nPickedVertex = 0;
        this.maxNumber = 100000;
        this.isLoop = true;
        this.pointsVector = [];
        this.curvatures = [];
        this.accelerations = [];
    }

    clear() {
        this.pointsVector = [];
        this.curvatures = [];
        this.accelerations = [];
    }
    addPoint(x, y) {
        this.pointsVector.push(new Point(x, y));
    }
    getPoint(i) {
        return this.pointsVector[i];
    }

    // modified 
    dragPicked() {
        this.pointsVector[this.nPickedVertex].moveWithMouse();
    }
    pickClosest(p) {
        this.nPickedVertex = 0;
        for (let i = 1; i < this.pointsVector.length; i += 1) {
            if (Dist2(this.pointsVector[i], p) < Dist2(this.pointsVector[this.nPickedVertex], p)) {
                this.nPickedVertex = i;
            }
        }
        console.log('!!!!! picked', this.nPickedVertex)
    }

    // draw
    drawPoints(color) {
        const p5 = this.p5;
        if (color !== undefined) {
            p5.stroke(p5.color(color));
        }
        p5.beginShape(p5.POINTS);
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            this.pointsVector[i].display();
        }
        p5.endShape();
    }
    drawCurve() {
        const p5 = this.p5;
        if (this.isLoop) {
            p5.beginShape();
            for (let i = 0; i < this.pointsVector.length; i += 1) {
                this.pointsVector[i].display();
            }
            p5.endShape(p5.CLOSE);
        } else {
            p5.beginShape();
            for (let i = 0; i < this.pointsVector.length; i += 1) {
                this.pointsVector[i].display();
            }
            p5.endShape();
        }
    }
    showPointsWithIndex() {
        const p5 = this.p5;
        p5.noStroke()
        p5.textSize(20);
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            p5.fill('blue')
            this.pointsVector[i].show(10);
            p5.fill('green')
            p5.text('' + i,  this.pointsVector[i].x + 10,  this.pointsVector[i].y - 10);
        }
    }

    // Curvature: computes 1 / radius of circum circle to (A,B,C)
    // https://en.wikipedia.org/wiki/Menger_curvature#Definition
    curvature(p, q, r) {
        const a = Dist(q, r), b = Dist(r, p), c = Dist(p, q);
        const s = (a + b + c) / 2;
        const d = s * (a + b - s) * (b + c - s) * (c + a - s);
        if (d < 0.000001) return 0;
        const k = Math.sqrt(d) * 4 / (a * b * c);
        return k;
    }
    setCurvatures() {
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            const a = this.pointsVector[this.prev(i)], b = this.pointsVector[i], c = this.pointsVector[this.next(i)];
            this.curvatures[i] = this.curvature(a, b, c);
        }
    }
    showCurvatures() {
        const p5 = this.p5;
        const curvatureScale = 2000;
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            const a = this.pointsVector[this.prev(i)], b = this.pointsVector[i], c = this.pointsVector[this.next(i)];
            const ab = VectorFromPoints(a, b), ac = VectorFromPoints(a, c);
            const k = this.curvature(a, b, c);
            const g = k * curvatureScale;
            if (Det(ac, ab) > 0) {
                ShowPointWithVector(p5, b, g, Rotate(Unit(ac)));
            } else {
                ShowPointWithVector(p5, b, -g, Rotate(Unit(ac)));
            }
        }
    }

    //Acceleration
    setAccelerations() {
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            const a = this.pointsVector[this.prev(i)], b = this.pointsVector[i], c = this.pointsVector[this.next(i)];
            const ba = VectorFromPoints(b, a), bc = VectorFromPoints(b, c);
            this.accelerations[i] = Sum(ba, bc);
        }
    }
    showAccelerations() {
        const p5 = this.p5;
        const accelerationScale = 30;
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            if (Norm(this.accelerations[i]) > maxAcceleration / accelerationScale) {
                ShowPointWithVector(p5, this.pointsVector[i], accelerationScale, this.accelerations[i]);
            }
            // ShowPointWithVector(p5, this.pointsVector[i], accelerationScale, this.accelerations[i]);
        }
    }

    subdivide(numberOfSubdivisionSteps) {
        for (let i = 0; i < numberOfSubdivisionSteps; i += 1) {
            this.subdivideCentripetal();
        }
        return this.pointsVector.length
    }
    subdivideCentripetal() {
        const s = [];
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            s.push(new Point(this.pointsVector[i].x, this.pointsVector[i].y));
            s.push(CentripetalMidcourseCorrected(this.pointsVector[this.prev(i)], this.pointsVector[i], this.pointsVector[this.next(i)], this.pointsVector[this.next(this.next(i))]));
        }
        this.pointsVector = s;
    }

    totalLength() {
        let l = 0;
        for (let i = this.pointsVector.length - 1, j = 0; j < this.pointsVector.length; i = j, j += 1) {
            l += Dist(this.pointsVector[i], this.pointsVector[j]);
        }
        return l;
    }
    resample(targetPts, nSample) {
        targetPts.clear()
        if (this.pointsVector.length == 0) {
            return
        }
        const l = this.totalLength();
        const r = [];
        let q = new Point();
        const d = l / nSample;
        let rd = d; // remaining distance to next sample
        let cl = 0; // length of remaining portion of current edge
        let nk = 1; // index of the next vertex on the original curve
        let c = 0; // number of already added points
        q.setTo(this.pointsVector[0]);
        r.push(CopyPoint(q));
        c += 1;
        while (c < nSample) {
            cl = Dist(q, this.pointsVector[nk]);
            if (rd < cl) {
                q = MoveByDistanceTowards(q, rd, this.pointsVector[nk]);
                r.push(CopyPoint(q));
                c += 1
                cl -= rd;
                rd = d;
            } else {
                rd -= cl;
                q.setTo(this.pointsVector[nk]);
                nk = this.next(nk);
            }
        }
        targetPts.pointsVector = r;
    }

    prev(i) { if (i == 0) return this.pointsVector.length - 1; else return i - 1; } // index of prev point
    next(i) { if (i == this.pointsVector.length - 1) return 0; else return i + 1; } // index of next point

    loadPoints(strs) {
        this.clear();
        const num = Number(strs[0]);
        for (let k = 0; k < num; k += 1) {
            const i = k + 1;
            const comma = strs[i].indexOf(',');
            const x = Number(strs[i].substring(0, comma));
            const y = Number(strs[i].substring(comma + 1));
            this.addPoint(x, y);
        }
        this.nPickedVertex = 0;
    }

    copyInto(q) {
        q.clear();
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            q.addPoint(this.pointsVector[i].x, this.pointsVector[i].y);
        }
    }

}

export {
    Points
}