import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})


export default function P5Sketch({ setup, draw, mousePressed, mouseDragged, mouseMoved, keyPressed }) {
    return <div style={{ borderStyle: "solid", borderWidth: "2px" }}>
        <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseDragged={mouseDragged} mouseMoved={mouseMoved} 
            keyPressed={keyPressed}
        />
    </div>
} 