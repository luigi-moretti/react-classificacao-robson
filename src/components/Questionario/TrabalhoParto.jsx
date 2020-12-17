import { FormControlLabel, RadioGroup, Radio, Typography, Grid, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function TrabalhoParto({ aoEnviar, aoVoltar }) {
    const [trabalhoParto, setTrabalhoParto] = useState('');

    return (
        <form
            style={{ height: "79vh" }}
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ trabalhoParto });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
                
                style={{ height: "100%" }}
            >
                <Grid container item direction="column">
                    <Typography variant="h4" component="h2">Trabalho de Parto</Typography>
                    <RadioGroup
                        onChange={
                            event => setTrabalhoParto(event.target.value)
                        }
                    >
                        <FormControlLabel value="A" control={<Radio required />} label="Espontâneo" />
                        <FormControlLabel value="B" control={<Radio />} label="Induzido ou cesárea antes do TP" />
                    </RadioGroup>
                    <Typography paragraph align="justify" style={{ marginTop: "25px" }}>
                        Espontâneo é o trabalho de parto que se inicia espontaneamente, mesmo que a mulher tenha agendado previamente uma cesariana.
                    </Typography>
                    <Typography paragraph  align="justify">
                        Também inclui os casos em que são feitas amniotomia e ocitocina para acelerar o parto após seu início espontâneo.
                    </Typography>
                    <Typography paragraph  align="justify">
                        O parto induzido é aquele nos quais é feito qualquer método de indução, como amniotomia, ocitocina, misoprostol, balão intracervical, laminária, entre outros.
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    >
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={event => { event.preventDefault(); aoVoltar(); }} startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>Próximo</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}
export default TrabalhoParto;