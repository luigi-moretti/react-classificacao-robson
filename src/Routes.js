import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Container } from '@material-ui/core';

//importa páginas
import Home from './pages/Home';
import Formulario from './pages/Formulario'

function Routes(){
    return(
        <Container>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/formulario' component={Formulario} />
            </Switch>
        </Container>
    )
}

export default Routes;