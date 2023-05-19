import dynamic from 'next/dynamic'
import { init, draw, mousePressed, mouseDragged, keyPressed } from '../p5/optimal-speed/main'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})


export default function P5Sketch() {

    const setup = (p5, parentRef) => {
        p5.createCanvas(parentRef.clientWidth, 800).parent(parentRef);
        init(p5);
    };

    return <div style={{ borderStyle: "solid", borderWidth: "2px" }}>
        <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} keyPressed={keyPressed}/>
    </div>
} 