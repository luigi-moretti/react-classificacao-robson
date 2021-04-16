import React from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import Questionario from '../../components/Questionario';

function Formulario(){
    return(
        <Box>
            <Grid item>
                <Typography variant="h3" component="h1" style={{marginTop:"25px"}}>Formulário</Typography>
            </Grid>
            <Questionario/>
        </Box>
    )
}

export default Formulario;