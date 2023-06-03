import type P5 from 'p5'

const PI = Math.PI;
const TWO_PI = 2 * Math.PI;

function showBlock(p5: P5, w: number, d: number, h: number, x: number, y:number, z: number, a: number) {
    p5.push(); 
    p5.translate(x,y,z); 
    p5.rotateZ(TWO_PI*a); 
    p5.box(w, d, h); 
    p5.pop(); 
}

export {
    showBlock,
}