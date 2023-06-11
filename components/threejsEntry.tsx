import { Card } from '@mui/material';
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { WebGLRenderer } from 'three';

interface ThreejsEntryProps {
    render: (mountRef: MutableRefObject<HTMLDivElement>, setInfo?: Dispatch<SetStateAction<string>>) => Promise<WebGLRenderer> | WebGLRenderer;
}

export default function ThreejsEntry(props: ThreejsEntryProps) {

    const mountRef = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [info, setInfo] = useState('');

    useEffect(() => {
        let renderer;
        (async () => {
            renderer = await props.render(mountRef, setInfo);
            mountRef.current.appendChild(renderer.domElement);
        })();
        return () => {
            mountRef.current?.removeChild(renderer?.domElement);
        }
    }, []);

    return <div tabIndex={0} style={{ width: '100%' }} ref={mountRef}>
        <Card variant='outlined' sx={{ position: 'absolute', color: 'black', left: '5px', userSelect: 'none' }}>{info}</Card>
    </div>
}