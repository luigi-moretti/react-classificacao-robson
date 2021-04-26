import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react';

function Dialogo({ onClose, titulo, corpo, open, status }) {

    return (
        <Dialog onClose={onClose} open={open} >
            <DialogTitle style={{marginTop:"25px", marginInline:"25px"}}>
                {titulo}
                {
                    status ? <CheckCircleIcon fontSize='inherit'
                    style={{ color: green[500], paddingTop: "5px" }}
                /> :  <ErrorIcon fontSize='medium'
                style={{ color: red[500], paddingTop: "10px" }}
            />
                }
            </DialogTitle>
            <DialogContent style={{marginBottom:"25px", marginInline:"25px"}}>{corpo}</DialogContent>
        </Dialog>
    )
}

export default Dialogo;