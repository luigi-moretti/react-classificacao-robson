import { Box, TextField, Typography, TextareaAutosize  } from '@material-ui/core';
import React from 'react';

function Contato(){
    return(
        <Box>
            <Typography variant="h3" component="h1" style={{marginTop:"25px"}}>Contato</Typography>
            <form>
                <TextField  id="nomeField" label="Nome" variant="outlined" type="text"/>
                <TextField id="emailField" label="E-mail" variant="outlined" type="email" />
                <TextareaAutosize id="textoField" aria-label="minimum height" rowsMin={3} placeholder="Conte para nós sua experiência" />
            </form>
        </Box>
    );
}
export default Contato;