import { AppBar, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component{
    constructor(){
        super();
        this.links = [
            {route: '/', label:<HomeIcon/>}
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