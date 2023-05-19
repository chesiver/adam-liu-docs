import type P5 from 'p5'

class Base {
    protected static p5: P5;
    public static setP5(p5: P5) {
        this.p5 = p5;
    }
}

class Point extends Base {
    public x = 0;
    public y = 0;
    constructor(props: { x?: number, y?: number, p?: Point, c?: number, v?: Vector }) {
        super();
        const { x, y, p, c, v } = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if (p != null) {
            this.x = p.x;
            this.y = p.y;
        }
        if ((p != null) && (c != null) && (v != null)) {
            this.x = p.x + c * v.x;
            this.y = p.y + c * v.y;
        }
    }
    moveWithMouse() {
        this.x += Point.p5.movedX;
        this.y += Point.p5.movedY;
    }
    display() {
        Point.p5.vertex(this.x, this.y);
    }
    show(r) {
        Point.p5.ellipse(this.x, this.y, 2 * r, 2 * r);
    }
    setTo(props: { x?: number, y?: number, p?: Point }) {
        const { x, y, p } = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if (p != null) {
            this.x = p.x;
            this.y = p.y;
        }
    }
}

// create 
function MoveByDistanceTowards(p: Point, d: number, q: Point) { 
    return new Point({
        p: p, 
        c: d, 
        v: Unit(new Vector({p: p, q: q})),
    });
}

class Vector extends Base {
    public x = 0;
    public y = 0;
    constructor(props: { x?: number, y?: number, v?: Vector, p?: Point, q?: Point }) {
        super();
        const { x, y, v, p, q } = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if (v != null) {
            this.x = v.x;
            this.y = v.y;
        }
        if ((p != null) && (q != null)) {
            this.x = q.x - p.x;
            this.y = q.y - p.y;
        }
    }
    setTo(props: { x?: number, y?: number, v?: Vector }) {
        const { x, y, v } = props;
        if ((x != null) && (y != null)) {
            this.x = x;
            this.y = y;
        }
        if (v != null) {
            this.x = v.x;
            this.y = v.y;
        }
    }
}

function Dist2(a: Point, b: Point) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return dx * dx + dy * dy;
}
function Dist(a: Point, b: Point) {
    return Math.sqrt(Dist2(a, b));
}

// create
function Unit(v: Vector) {
    const d = Math.sqrt(v.x * v.x + v.y * v.y);
    return new Vector({
        x: v.x / d,
        y: v.y / d
    });
}

// transform
function Rotate(v: Vector) {
    return new Vector({
        x: -v.y,
        y: v.x
    });
}

// measure
function Dot(u: Vector, v: Vector) {
    return u.x * v.x + u.y * v.y;
}
function Det(u: Vector, v: Vector) {
    return Dot(Rotate(u), v);
}
function Norm(u: Vector) {
    return Math.sqrt(Dot(u, u));
}

// operation
function Sum(u: Vector, v: Vector) {
    return new Vector({
        x: u.x + v.x,
        y: u.y + v.y
    });
}

export {
    Base,
    Point,
    Dist,
    Dist2,
    Vector,
    Unit,
    Rotate,
    Dot,
    Det,
    Norm,
    Sum,
    MoveByDistanceTowards,
};


