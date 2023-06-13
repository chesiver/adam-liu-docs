/* eslint-disable no-empty */
import { Base } from "../common";
import { Point } from "../common3D";

class Basement extends Base {

    private pointsVector: Array<Point>;

    clear() {
        this.pointsVector = [];
    }

    addPoints(x: number, y: number) {
        this.pointsVector.push(new Point({ x, y }));
    }
    
    loadPts(input: string) {
        this.clear();
        const strs = input.split('\n');
        let p = 0;
        const num = Number(strs[p++]);
        for (let k = 0; k < num; k += 1) {
            const i = k + 1;
            const comma = strs[i].indexOf(',');
            const x = Number(strs[i].substring(0, comma));
            const y = Number(strs[i].substring(comma + 1));
            this.addPoints(x, y);
        }
    }

    /** display */
    drawPoints() {
        const p5 = Basement.p5;
        p5.stroke('blue'); p5.strokeWeight(8);
        p5.beginShape(p5.POINTS);
        for (let i = 0; i < this.pointsVector.length; i += 1) {
            this.pointsVector[i].display();
        }
        p5.endShape();
    }

}

export {
    Basement,
}