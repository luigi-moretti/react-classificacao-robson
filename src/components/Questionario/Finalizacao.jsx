import { Button, Container, Grid, Box, Typography } from '@material-ui/core';
//import SaveIcon from '@material-ui/icons/Save';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
//import { useEffect, useState } from 'react';

function Finalizacao({aoEnviar, aoVoltar, dadosColetados, grupo }) {

    
    return (
        <Container>
            <Typography variant="h4" component="h2">Finalização</Typography>
            <Typography variant="h5" component="p" align="center">Parabéns!</Typography>
            <Typography paragraph align="center">Dados da paciente salvos com sucesso!</Typography>

                <Grid container
                direction="row"
                justify="center">
                    <Box display="flex" justifyContent="flex-end">
                        <Link to='/'><Button variant="contained" color="primary" startIcon={<HomeIcon />} >Início</Button></Link>
                    </Box>
                </Grid>
        </Container>
    );

    /*  
    <Button variant="contained" color="primary" startIcon={<PrintIcon />} >Imprimir</Button>
                <Grid item >
                    <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary"  startIcon={<SaveIcon />} size="small">Salvar</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={event => {event.preventDefault(); aoVoltar();}} startIcon={<ArrowBackIosIcon />} size="small">Voltar</Button>
                </Grid>
    */
}
export default Finalizacao;