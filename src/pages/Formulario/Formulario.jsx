import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Questionario from '../../components/Questionario';

function Formulario(){
    return(
        <Grid 
        style = {{height:"80vh"}}>
            <Grid item>
                <Typography variant="h3" component="h1" style={{marginTop:"25px"}}>Formulário</Typography>
            </Grid>
                <Questionario/>
        </Grid>
    )
}

export default Formulario;