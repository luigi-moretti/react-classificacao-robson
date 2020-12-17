import { Grid} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import ApresentacaoFetal from './ApresentacaoFetal';
import IdadeGestacional from './IdadeGestacional';
import NumeroFetos from './NumeroFetos';
import Paridade from './Paridade';
import TrabalhoParto from './TrabalhoParto';
import Finalizacao from './Finalizacao';


function Questionario() {
    const [formAtual, setFormAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    const [grupo, setGrupo] = useState(0);

    useEffect(()=>{
        if(formAtual === formularios.length-1){
            if(dadosColetados.fetos === 'B'){

                setGrupo(8);
            }else{
                if(dadosColetados.apresentacaoFetal === 'C'){
    
                    setGrupo(9);
                } else if(dadosColetados.apresentacaoFetal === 'B'){
                    if(dadosColetados.paridade === 'A'){
        
                        setGrupo(6);
                    } else{
        
                        setGrupo(7);
                    }
                } else if(dadosColetados.apresentacaoFetal === 'A'){
                    if(dadosColetados.idadeGestacional === 'B'){
        
                        setGrupo(10);
                    }else{
                        if(dadosColetados.paridade === 'C'){
            
                            setGrupo(5);
                        } else {
                                if(dadosColetados.paridade === 'A'){
                                    if(dadosColetados.trabalhoParto === 'A'){
                        
                                        setGrupo(1);
                                    } else{
                        
                                        setGrupo(2);
                                    }
                                }else {
                                    if(dadosColetados.trabalhoParto === 'A'){
                        
                                        setGrupo(3);
                                    } else{
                        
                                        setGrupo(4);
                                    }
                                }
                        }
                    }
                }

            } 
        }
    })

    const formularios = [
        <Paridade aoEnviar={coletarDados} aoVoltar={anterior} />,
        <NumeroFetos aoEnviar={coletarDados} aoVoltar={anterior} />,
        <ApresentacaoFetal aoEnviar={coletarDados} aoVoltar={anterior} />,
        <IdadeGestacional aoEnviar={coletarDados} aoVoltar={anterior} />,
        <TrabalhoParto aoEnviar={coletarDados} aoVoltar={anterior} />,
        <Finalizacao aoVoltar={anterior} grupo={grupo}/>]

    function proximo() {
        setFormAtual(formAtual + 1);
    }

    function anterior() {
        setFormAtual(formAtual - 1);
    }

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();

    }
    return (
        <Grid container
        direction="column"
        justify="flex-start"
        alignItems="stretch">
            {formularios[formAtual]}
        </Grid>

    )
}

export default Questionario;