import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Imagem from '../../assets/img/404.png'

function Pagina404(){
    return(
        <Container>
            <Typography variant="h3" component="h1" style={{ marginTop: "25px" }}>Página não encontrada</Typography>
            <Container>
                    <img style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: '15px',
                        maxWidth:'100%'
                    }} alt="logotipo" src={Imagem} />
                </Container>
        </Container>
    );
}

export default Pagina404;