import { Button, Modal } from "@mui/material";
import ThreejsEntry from "./threejsEntry";
import { MutableRefObject, useState } from "react";
import { WebGLRenderer } from "three";
interface FullscreenThreejsProps {
    render: (mountRef: MutableRefObject<HTMLDivElement>) => WebGLRenderer;
}

export function getServerSideProps () {
    return { extra: { msg: 'hello world' } }
}

export default function FullscreenThreejs(props: FullscreenThreejsProps) {
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <Button variant="contained" onClick={() => setShow(!show)}>Show Example</Button>
            <Modal
                open={show}
                onClose={() => setShow(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%' }}>
                    <ThreejsEntry render={props.render}></ThreejsEntry>
                </div>
            </Modal>
        </div>
    );
}