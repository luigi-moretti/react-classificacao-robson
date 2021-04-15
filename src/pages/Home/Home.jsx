import React from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Favicon from '../../assets/img/favicon.png';


function Home() {
    return (
        <Container>
            <Typography variant="h3" component="h1" style={{ marginTop: "25px" }}>Bem-vindo(a)!</Typography>
            <Grid
                //style={{ height: "100vh" }}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography align="justify" paragraph>
                    Criada pelo médico irlandês Michael Robson em 2001, a <strong>Classificação de Robson</strong> tem como objetivo classificar de forma padronizada e aceita globalmente às cesáreas que são realizadas em uma ou mais instituições.
                </Typography>
                <Container>
                    <img style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: '15px',
                        maxWidth:'250px'
                    }} alt="grupo01" src={Favicon} />
                </Container>
                <Link to='/formulario' style={{ textDecoration: 'none', color: 'white' }}>
                    <Button variant="contained" color="primary" size="large">
                        Iniciar classificação
                    </Button>
                </Link>
            </Grid>
        </Container>
    )
}

export default Home;