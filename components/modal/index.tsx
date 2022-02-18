import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../../styles/Home.module.css'
import { Dispatch, SetStateAction } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Task from '../../types/task';


type ModalProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    task: Task;
    index: number;
    updateTask: (task:Task) => void;
}

export default function({open, setOpen, index, task, updateTask}: ModalProps){
    const updateTaskHandler = () => {
        fetch('/api/update/'+1).then(r=> {
            r.json().then(r2 => {
                updateTask(task)
                setOpen(false);
            });
        })
    } 
    return <Modal
        open={open}
        onClose={ () => { setOpen(false) } }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className={styles.modal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Task {index}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {task.title}
            </Typography>
            <CardActions>
                {task.status !== 'COMPLETED' &&<Button onClick={updateTaskHandler}>Complete</Button>}
                <Button onClick={()=> setOpen(false)}>Close</Button>
            </CardActions>
        </Box>
    </Modal>
}