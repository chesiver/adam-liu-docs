class Point {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    moveWithMouse() { 
        this.x += this.p5.movedX; this.y += this.p5.movedY; 
    }
    display() {
        this.p5.vertex(this.x, this.y);
    };
    show(r) { 
        this.p5.ellipse(this.x, this.y, 2 * r, 2 * r); 
    } // shows point as disk of radius r

    setTo(p) { 
        this.x = p.x; this.y = p.y; 
    }
}

function CopyPoint(p) {
    return new Point(p.x, p.y);
}

function PointWithVector(p, c, v) {
    return new Point(p.x + c * v.x, p.y + c * v.y);
}

function Dist2(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return dx * dx + dy * dy;
}

function Dist(a, b) {
    return Math.sqrt(Dist2(a, b));
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    unit() {
        const d = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector(this.x / d, this.y / d);
    }
}

function VectorFromPoints(a, b) {
    return new Vector(b.x - a.x, b.y - a.y);
}

function MoveByDistanceTowards(p, d, q) { 
    return PointWithVector(p, d, VectorFromPoints(p, q).unit());
}

// create
function Unit(v) {
    const d = Math.sqrt(v.x * v.x + v.y * v.y);
    return new Vector(v.x / d, v.y / d);
}

// transform 
function Rotate(v) {
    return new Vector(-v.y, v.x);
}

// measure
function Dot(u, v) {
    return u.x * v.x + u.y * v.y;
}
function Det(u, v) {
    return Dot(Rotate(u), v);
}
function Norm(u) {
    return Math.sqrt(Dot(u, u));
}

// operation
function Sum(u, v) {
    return new Vector(u.x + v.x, u.y + v.y);
}




export {
    Point,
    CopyPoint,
    PointWithVector,
    Dist,
    Dist2,
    Vector,
    VectorFromPoints,
    MoveByDistanceTowards,
    Unit,
    Rotate,
    Dot,
    Det,
    Norm,
    Sum,
};