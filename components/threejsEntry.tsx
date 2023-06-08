import { MutableRefObject, useEffect, useRef } from 'react';
import { WebGLRenderer } from 'three';

interface ThreejsEntryProps {
    render: (mountRef: MutableRefObject<HTMLDivElement>) => WebGLRenderer;
}

export default function ThreejsEntry(props: ThreejsEntryProps) {

    const mountRef = useRef<HTMLDivElement>({} as HTMLDivElement);

    useEffect(() => {
        const renderer = props.render(mountRef);
        mountRef.current.appendChild(renderer.domElement);
        return () => {
            mountRef.current?.removeChild(renderer.domElement);
        }
    }, []);

    return <div tabIndex={0} style={{ width: '100%' }} ref={mountRef}>
        {/* <div id="blocker" style={{ 
            position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" 
        }}>
            <div id="instructions" style={{ 
                width: '100%', height: "100%", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "14px",
                cursor: "pointer",
            }}>
                <p style={{ fontSize: "36px" }}>
					Click to play
                </p>
                <p>
					Move: WASD<br/>
					Jump: SPACE<br/>
					Look: MOUSE
                </p>
            </div>
        </div> */}
    </div>
}