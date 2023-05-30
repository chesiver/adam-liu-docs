import { ReactElement, Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
interface IFullscreenModalProps {
    content: ReactElement;
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

export default function FullscreenModal({ content, show, setShow }: IFullscreenModalProps) {

    return (
        <div>
            <Modal
                open={show}
                onClose={() => setShow(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {content}
                </Box>
            </Modal>
        </div>
    );
}