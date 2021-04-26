import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component{
    constructor(){
        super();
        this.links = [
            {route: '/', label: <Tooltip title="Início" arrow><HomeIcon/></Tooltip>},
            {route: '/contato', label:<Tooltip title="Contato" arrow><EmailIcon/></Tooltip>}
        ]
    }
    
    renderLink = ()=>{
        return this.links.map(link => 
            <Typography key={link.route} variant="h6">
                <Link key={link.route} to={link.route} style={{color:"white", textDecoration:"none", margin:"10px"}}>
                    {link.label}
                </Link>
            </Typography>
        );
    }



    render(){
        return(
            <AppBar position="static">
                <Toolbar>                   
                        {this.renderLink()}
                </Toolbar>
            </AppBar>
        )
    }
}

export default Menu;