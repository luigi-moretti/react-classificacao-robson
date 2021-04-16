import { TextField, Button, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function Salvar({ aoEnviar, dadosColetados }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numeroEnd, setNumeroEnd] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, idade, endereco, numeroEnd, telefone });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
            >

                <Grid item
                    container
                    direction="row"
                    justify="start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2">Salvar Dados</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField onChange={(event) => {
                            setNome(event.target.value);
                        }} required label="Nome" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField onChange={(event) => {
                            setSobrenome(event.target.value);
                        }}
                            required label="Sobrenome" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField onChange={(event) => {
                            setIdade(event.target.value);
                        }} required label="Idade" type="number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField onChange={(event) => {
                            setTelefone(event.target.value);
                        }} label="Telefone" type="number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <TextField onChange={(event) => {
                            setEndereco(event.target.value);
                        }} label="Endereço" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <TextField onChange={(event) => {
                            setNumeroEnd(event.target.value);
                        }} label="Número" type="number" variant="outlined" fullWidth />
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                >
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={event => { event.preventDefault(); }} startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>Próximo</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );

}
export default Salvar;