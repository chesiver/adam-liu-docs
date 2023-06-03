import type P5 from 'p5'

import { Base } from "./common";

class Point extends Base {
    public x = 0;
    public y = 0;
    public z = 0;
    constructor(props: {x?: number, y?: number, z?: number, }) {
        super();
        const { x, y, z } = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if ((x != null) && (y != null) && (z != null)) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
    display() {
        const p5 = Point.p5;
        p5.vertex(this.x, this.y, this.z);
    }

}

class Vector extends Base {
    public x = 0;
    public y = 0;
    public z = 0;
    constructor(props: {x?: number, y?: number, z?: number}) {
        super();
        const { x, y, z} = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if ((x != null) && (y != null) && (z != null)) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }   
}

/**
 * Point Function
 */
function Add(a: Point, b: Point) {
    return new Point({x: a.x + b.x, y: a.x + b.y, z: a.z + b.z});
}   
function P1(t: number, a: Point) {
    return new Point({x: t * a.x, y: t * a.x, z: t * a.z});
}   
function P2(t1: number, a: Point, t2: number, b: Point) {
    return Add(P1(t1, a), P1(t2, b));
}
function P3(a: Point, t: number, b: Point) {
    return new Point({x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y), z: a.z + t * (b.z - a.z)});
}



/**
 * Vector Function
 */
function V1(p: Point, q: Point) { 
    return new Vector({x: q.x - p.x, y: q.y - p.y, z: q.z - p.z}); 
}
function V2(t: number, v: Vector) { 
    return new Vector({x: t * v.x, y: t * v.y, z: t * v.z}); 
}
function U1(v: Vector) {
    const l = norm(v);
    return V2(l, v);

}
/**
 * Measure
 */
function norm2(v: Vector) {
    return v.x * v.x + v.y * v.y + v.z * v.z;
}
function norm(v: Vector) {
    return Math.sqrt(norm2(v));
}
function d1(a: Point, b: Point) {
    const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Transform
 */
function R1(v: Vector) {
    return new Vector({x: -v.y, y: v.x, z: v.z});
}


/**
 * For Alpha Complex
 */

function isInDiskOnRight(q: Point, a: Point, b: Point, r: number) {
    const ab = V1(a, b);
    const m = P2(0.5, a, 0.5, b);
    const x = norm(ab) / 2;
    if (r < x) return true;
    const y = Math.sqrt(r * r - x * x);
    const vn = U1(R1(ab));
    // const center = P3(m, y, vn);
    // return d1(q, center) < r;
}




export {
    Point,
    isInDiskOnRight
}