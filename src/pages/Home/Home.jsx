import React from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <Container>
            <Typography variant="h3" component="h1" style={{marginTop:"25px"}}>Bem-vindo!</Typography>
            <Grid
                style={{ height: "70vh" }}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography align="justify" paragraph>
                    Criada pelo médico irlandês Michael Robson em 2001, a <strong>Classificação de Robson</strong> tem como objetivo classificar de forma padronizada e aceita globalmente às cesáreas que são realizadas em uma ou mais instituições.
                </Typography>
                <Link to='/formulario'>
                    <Button variant="contained" color="primary" size="large">
                        Iniciar classificação
                </Button>
                </Link>
            </Grid>
        </Container>
    )
}

export default Home;