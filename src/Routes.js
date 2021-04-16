import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Container, Box } from '@material-ui/core';

//importa páginas
import Home from './pages/Home';
import Formulario from './pages/Formulario'

function Routes(){
    return(
        <Box>
            <Container maxWidth="sm" style={{marginBottom:"25px"}}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/formulario' component={Formulario} />
                </Switch>
            </Container>
        </Box>
    )
}

export default Routes;