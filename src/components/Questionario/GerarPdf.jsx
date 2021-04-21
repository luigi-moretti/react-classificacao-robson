import { TextField, Button, Grid, Typography, Box, InputLabel, Select, MenuItem    } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PrintIcon from '@material-ui/icons/Print';
import React, { useState } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
//import { data } from './data';
import { Impressao } from './impressao';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



function GerarPdf({ aoEnviar, aoVoltar, dadosColetados, validacoes}) {
    const [nomePaciente, setNomePaciente] = useState('');
    const [idade, setIdade] = useState('');
    const [cpfPaciente, setCpfPaciente] = useState('');
    const [nomeProfissional, setNomeProfissional] = useState('');
    const [cpfProfissional, setCpfProfissional] = useState('');
    const [tipoConselho, setTipoConselho] = useState('');
    const [numeroConselho, setNumeroConselho] = useState('');
    const [erros, setErros] = useState(
        {
            nomePaciente:{valido:true, texto:""},
            cpfPaciente:{valido:true, texto:""},
            nomeProfissional:{valido:true, texto:""},
            cpfProfissional:{valido:true, texto:""},
        });

    const visualizarImpressao = async () => {
        const formDados = { 
            nomePaciente: nomePaciente,
            idade: idade,
            cpfPaciente: cpfPaciente,
            nomeProfissional: nomeProfissional,
            cpfProfissional: cpfProfissional,
            tipoConselho: tipoConselho,
            numeroConselho:numeroConselho
         }
        const dados = { ...dadosColetados, ...formDados }
        //console.log('report', data);
        console.log('dadosColetados', dados);
        const classeImpressao = new Impressao(dados);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }

    function validarCampos(event){
        const {name,value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
        console.log(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true;
    }

    return (
        <Box>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if(possoEnviar()){
                        visualizarImpressao();
                    }
                }}
            >
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                >

                    <Grid item
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2">Salvar Dados</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2">Dados da paciente</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField 
                            onChange={(event) => {
                                setNomePaciente(event.target.value);
                            }} 
                            value={nomePaciente} 
                            name="nomePaciente"
                            label="Nome da paciente"
                            onBlur={validarCampos}
                            error={!erros.nomePaciente.valido}
                            helperText={erros.nomePaciente.texto}
                            required variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(event) => {
                                setCpfPaciente(event.target.value);
                            }} 
                            value={cpfPaciente}
                            label="CPF" 
                            name="cpfPaciente"
                            type="number" 
                            onBlur={validarCampos}
                            error={!erros.cpfPaciente.valido}
                            helperText={erros.cpfPaciente.texto}
                            required variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField onChange={(event) => {
                                setIdade(event.target.value);
                            }}  
                            value={idade} 
                            name="idade"
                            label="Idade" 
                            type="number" 
                            variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2">Dados do profissional</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField onChange={(event) => {
                                setNomeProfissional(event.target.value);
                            }} 
                            value={nomeProfissional} 
                            label="Nome do profissional" 
                            name="nomeProfissional"
                            onBlur={validarCampos}
                            error={!erros.nomeProfissional.valido}
                            helperText={erros.nomeProfissional.texto}
                            variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField onChange={(event) => {
                                setCpfProfissional(event.target.value);
                            }} 
                            value={cpfProfissional} 
                            label="CPF" 
                            name="cpfProfissional"
                            type="number" 
                            onBlur={validarCampos}
                            error={!erros.cpfProfissional.valido}
                            helperText={erros.cpfProfissional.texto}
                            variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Tipo do Conselho</InputLabel>
                            <Select
                                value={tipoConselho}
                                onChange={(event) => {
                                    setTipoConselho(event.target.value);
                                }}
                                required
                            >
                                <MenuItem value={'COREN'}>COREN</MenuItem>
                                <MenuItem value={'CRM'}>CRM</MenuItem>

                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(event) => {
                                setNumeroConselho(event.target.value);
                            }} 
                            value={numeroConselho} 
                            label="Número do Conselho" 
                            name="numeroConselho"
                            type="number" 
                            variant="outlined" required fullWidth />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={event => { aoVoltar(); }} startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" endIcon={<PrintIcon />} >Gerar PDF</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}
export default GerarPdf;