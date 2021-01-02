import { Grid} from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import ApresentacaoFetal from './ApresentacaoFetal';
import IdadeGestacional from './IdadeGestacional';
import NumeroFetos from './NumeroFetos';
import Paridade from './Paridade';
import TrabalhoParto from './TrabalhoParto';
import Classificacao from './Classificacao';
import Salvar from './Salvar';
import Finalizacao from './Finalizacao';


function Questionario() {
    const [formAtual, setFormAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    const [grupo, setGrupo] = useState(0);

    useEffect(()=>{
        if(formAtual === formularios.length-3){
            if(dadosColetados.fetos === 'B'){
                
                setGrupo(8);
                //setDados({ ...dadosColetados, ...{grupo:8} });
            }else{
                if(dadosColetados.apresentacaoFetal === 'C'){
    
                    setGrupo(9);
                    //setDados({ ...dadosColetados, ...{grupo:9} });
                } else if(dadosColetados.apresentacaoFetal === 'B'){
                    if(dadosColetados.paridade === 'A'){
        
                        setGrupo(6);
                        //setDados({ ...dadosColetados, ...{grupo:6} });
                    } else{
        
                        setGrupo(7);
                        //setDados({ ...dadosColetados, ...{grupo:7} });
                    }
                } else if(dadosColetados.apresentacaoFetal === 'A'){
                    if(dadosColetados.idadeGestacional === 'B'){
        
                        setGrupo(10);
                        //setDados({ ...dadosColetados, ...{grupo:10} });
                    }else{
                        if(dadosColetados.paridade === 'C'){
            
                            setGrupo(5);
                            //setDados({ ...dadosColetados, ...{grupo:5} });
                        } else {
                                if(dadosColetados.paridade === 'A'){
                                    if(dadosColetados.trabalhoParto === 'A'){
                        
                                        setGrupo(1);
                                        //setDados({ ...dadosColetados, ...{grupo:1} });
                                    } else{
                        
                                        setGrupo(2);
                                        //setDados({ ...dadosColetados, ...{grupo:2} });
                                    }
                                }else {
                                    if(dadosColetados.trabalhoParto === 'A'){
                        
                                        setGrupo(3);
                                        //setDados({ ...dadosColetados, ...{grupo:3} });
                                    } else{
                        
                                        setGrupo(4);
                                        //setDados({ ...dadosColetados, ...{grupo:4} });
                                    }
                                }
                        }
                    }
                }

            } 
        }

        if(formAtual === formularios.length-1){
            console.log(dadosColetados);
        }
    })

    const formularios = [
        <Paridade aoEnviar={coletarDados} aoVoltar={anterior} />,
        <NumeroFetos aoEnviar={coletarDados} aoVoltar={anterior} />,
        <ApresentacaoFetal aoEnviar={coletarDados} aoVoltar={anterior} />,
        <IdadeGestacional aoEnviar={coletarDados} aoVoltar={anterior} />,
        <TrabalhoParto aoEnviar={coletarDados} aoVoltar={anterior} />,
        <Classificacao aoEnviar={coletarDados} aoVoltar={anterior} dadosColetados={dadosColetados} grupo={grupo}/>,
        <Salvar aoEnviar={coletarDados} aoVoltar={anterior} />,
        <Finalizacao aoEnviar={coletarDados} aoVoltar={anterior} />]
        

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