import { FormControlLabel, RadioGroup, Radio, Typography, Grid, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function NumeroFetos({ aoEnviar, aoVoltar }) {
    const [fetos, setFetos] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ fetos });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
            >
                <Grid container item direction="column">
                    <Typography variant="h4" component="h2">Número de Fetos</Typography>
                    <RadioGroup
                        onChange={
                            event => setFetos(event.target.value)
                        }
                    >
                        <FormControlLabel value="A" control={<Radio required />} label="1" />
                        <FormControlLabel value="B" control={<Radio />} label="2 ou mais" />
                    </RadioGroup>
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
export default NumeroFetos;