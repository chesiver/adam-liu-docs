import { PointWithVector, VectorFromPoints, Dist } from '../common'

function n2(a, A, b, B, t) { return A + (t - a) / (b - a) * (B - A); }
function n3(a, A, b, B, c, C, t) { return n2(a, n2(a, A, b, B, t), c, n2(b, B, c, C, t), t); }
function n4(a, A, b, B, c, C, d, D, t) { return n2(a, n3(a, A, b, B, c, C, t), d, n3(b, B, c, C, d, D, t), t); }

function N2(a, A, b, B, t) { return PointWithVector(A, (t - a) / (b - a), VectorFromPoints(A, B)); }
function N3(a, A, b, B, c, C, t) { return N2(a, N2(a, A, b, B, t), c, N2(b, B, c, C, t), t); }
function N4(a, A, b, B, c, C, d, D, t) { return N2(a, N3(a, A, b, B, c, C, t), d, N3(b, B, c, C, d, D, t), t); }

function Centripetal(A, B, C, D, t) {
    let a = 0, b = Math.sqrt(Dist(A, B)), c = b + Math.sqrt(Dist(B, C)), d = c + Math.sqrt(Dist(C, D));
    b = b / d; c = c / d; d = 1;
    return N4(a, A, b, B, c, C, d, D, t);
}

function CentripetalMidcourseCorrected(A, B, C, D) {
    let a = 0, b = Math.sqrt(Dist(A, B)), c = b + Math.sqrt(Dist(B, C)), d = c + Math.sqrt(Dist(C, D));
    b = b / d; c = c / d; d = 1;
    return N4(a, A, b, B, c, C, d, D, n4(0, a, 1.0 / 3, b, 2.0 / 3, c, 1.0, d, 0.5));
}

export {
    Centripetal,
    CentripetalMidcourseCorrected,
}