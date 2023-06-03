import { Box, Button, Modal } from "@mui/material";
import ThreejsEntry from "./threejsEntry";
import { MutableRefObject, useState } from "react";
import { WebGLRenderer } from "three";

const style = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 0,
};

interface FullscreenThreejsProps {
    render: (mountRef: MutableRefObject<HTMLDivElement>) => WebGLRenderer;
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
                <Box sx={style}>
                    <ThreejsEntry render={props.render}></ThreejsEntry>
                </Box>
            </Modal>
        </div>
    );
}