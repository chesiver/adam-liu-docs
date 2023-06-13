import { Button, Modal } from "@mui/material";
import ThreejsEntry from "./threejsEntry";
import { MutableRefObject, useState } from "react";
import { WebGLRenderer } from "three";

interface FullscreenThreejsProps {
    render: (mountRef: MutableRefObject<HTMLDivElement>) => Promise<WebGLRenderer> | WebGLRenderer;
}

export default function FullscreenThreejs(props: FullscreenThreejsProps) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Button variant="contained" onClick={() => {
                return setShow(!show)
            }}>Show Example</Button>
            <Modal
                open={show}
                onClose={() => {
                    return setShow(false)
                }}
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