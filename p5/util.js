function ShowPointWithVector(p5, p, s, v) {
    p5.line(p.x, p.y, p.x + s * v.x, p.y + s * v.y);
}

export {
    ShowPointWithVector,
}