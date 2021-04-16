import { FormControlLabel, RadioGroup, Radio, Typography, Button, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function Paridade({ aoEnviar }) {
    const [paridade, setParidade] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ paridade });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
            >


                <Grid container item direction="column">
                    <Typography variant="h4" component="h2">Paridade</Typography>
                    <RadioGroup value={paridade} onChange={
                        event => setParidade(event.target.value)
                    }>
                        <FormControlLabel value="A" control={<Radio required />} label="Nulípara" />
                        <FormControlLabel value="B" control={<Radio />} label="Multípara sem cesárea anterior" />
                        <FormControlLabel value="C" control={<Radio />} label="Multípara com cesárea anterior (uma ou mais)" />
                    </RadioGroup>
                    <Typography align="justify" style={{ marginTop: "25px" }} >
                    Multípara é a mulher que já teve parto de bebê com ≥ 500 g ou ≥ 22 semanas, vivo ou morto, com ou sem malformações, por qualquer via. Outras cirurgias uterinas (e.g. miomectomia) não devem ser consideradas como cesárea anterior.
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    justify="space-between"
                    >
                    <Grid item>
                        <Button variant="contained" disabled color="primary" onClick={event => { event.preventDefault(); }} startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>Próximo</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );

}
export default Paridade;