import type P5 from 'p5'
import { Point, Vector } from './common';

function ShowPointWithVector(p5, p: Point, s: number, v: Vector) {
    p5.line(p.x, p.y, p.x + s * v.x, p.y + s * v.y);
}

export {
    ShowPointWithVector,
}