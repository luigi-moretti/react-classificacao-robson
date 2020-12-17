import { Button, Container, Grid, Box, Typography } from '@material-ui/core';
//import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {ReactComponent as GrupoSVG} from '../../assets/img/grupo01.svg'
//import { useEffect, useState } from 'react';

function Finalizacao({aoVoltar, dadosColetados, grupo}){


    return(
       <Container>
           <Typography variant="h4" component="h2">Classificação</Typography>
           <Typography variant="h5" component="p" align="center">Grupo: {grupo}</Typography>
           <GrupoSVG style={{marginLeft:"auto", marginRight:"auto", width:"100%"}}/>
           <Typography align="center" style={{marginTop:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eget neque non vulputate. Proin euismod fringilla dolor, vitae consequat lorem blandit et.</Typography>

           <Grid 
                container
                direction="row"
                justify="center"
                
                spacing={1}>
                
                <Grid item >
                    <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary" startIcon={<PrintIcon />} >Imprimir</Button>
                    </Box>
                </Grid>
                <Grid item >
                    <Box display="flex" justifyContent="flex-end">
                    <Link to='/'><Button variant="contained" color="primary" startIcon={<HomeIcon />} >Início</Button></Link>
                    </Box>
                </Grid>
            </Grid>
       </Container>
    );

    /*  
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