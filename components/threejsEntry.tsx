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

    return <div ref={mountRef}></div>
}