import { Button, Container, Grid, Box, Typography } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
//import { useEffect, useState } from 'react';
import imgGrupo01 from '../../assets/img/grupo01.png';
import imgGrupo02 from '../../assets/img/grupo02.png';
import imgGrupo03 from '../../assets/img/grupo03.png';
import imgGrupo04 from '../../assets/img/grupo04.png';
import imgGrupo05 from '../../assets/img/grupo05.png';
import imgGrupo06 from '../../assets/img/grupo06.png';
import imgGrupo07 from '../../assets/img/grupo07.png';
import imgGrupo08 from '../../assets/img/grupo08.png';
import imgGrupo09 from '../../assets/img/grupo09.png';
import imgGrupo10 from '../../assets/img/grupo10.png';

function Finalizacao({ aoVoltar, dadosColetados, grupo }) {

    const imagemGrupos = {
        0:{  
            imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="Classificando..." src='' />,
            label:<Typography paragraph>Classificando...</Typography>
        },
        1:{  
            imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo01" src={imgGrupo01} />,
            label:<Typography paragraph>Nulíparas com feto único cefálico, maior ou igual que 37 semanas, em trabalho de parto espontâneo.</Typography>
        },
        2:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo02" src={imgGrupo02} />,
            label:<Typography paragraph>Nulíparas com feto único, cefálico, maior ou igual que 37 semanas, cujo parto é induzido ou que são submetidas à cesárea antes do início do trabalho de parto.</Typography>
        },
        3:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo03" src={imgGrupo03} />,
            label:<Typography paragraph>Multíparas sem cesárea anterior, com feto único, cefálico, maior ou igual que 37 semanas, em trabalho de parto espontâneo.</Typography>
        },
        4:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo04" src={imgGrupo04} />,
            label:<Typography paragraph>Multíparas sem cesárea anterior, com feto único, cefálico, maior ou igual que 37 semanas, cujo parto é induzido ou que são submetidas à cesárea antes do início do trabalho de parto.</Typography>
        },
        5:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo05" src={imgGrupo05} />,
            label:<Typography paragraph>Todas as multíparas com pelo menos uma cesárea anterior, com feto único, cefálico, maior ou igual que 37 semanas.</Typography>
        },
        6:{imagem:<img
            style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
            }}
            alt="grupo06" src={imgGrupo06} />,
            label:<Typography paragraph>Todas as nulíparas com feto único em apresentação pélvica.</Typography>    
        },
        7:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo07" src={imgGrupo07} />,
            label:<Typography paragraph>Todas as multíparas com feto único em apresentação pélvica, incluindo aquelas com cesárea(s) anterior(es).</Typography>
        },
        8:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo08" src={imgGrupo08} />,
            label:<Typography paragraph>Todas mulheres com gestação múltipla, incluindo aquelas com cesárea(s) anterior(es).</Typography>
        },
        9:{imagem:<img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo09" src={imgGrupo09} />,
            label:<Typography paragraph>Todas gestantes com feto em situação transversa ou oblíqua, incluindo aquelas com cesárea(s).</Typography>
        },
        10:{imagem: <img style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }} alt="grupo10" src={imgGrupo10} />,
            label:<Typography paragraph>Todas gestantes com feto e cefálico, menor que 37 semanas, incluindo aquelas com cesárea(s) anterior(es).</Typography>
    }
    }

    return (
        <Container>
            <Typography variant="h4" component="h2">Classificação</Typography>
            <Typography variant="h5" component="p" align="center">Grupo: {grupo}</Typography>
            {imagemGrupos[grupo].imagem}
            <Typography align="center" style={{ marginTop: "25px" }}>
                {imagemGrupos[grupo].label}
            </Typography>

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