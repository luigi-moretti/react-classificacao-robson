import { FormControlLabel, RadioGroup, Radio, Typography, Grid, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function ApresentacaoFetal({ aoEnviar, aoVoltar }) {
    const [apresentacaoFetal, setApresentacao] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ apresentacaoFetal });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
            >
                <Grid container item direction="column">
                    <Typography variant="h4" component="h2">Apresentação Fetal</Typography>
                    <RadioGroup
                        onChange={
                            event => setApresentacao(event.target.value)
                        }
                    >
                        <FormControlLabel value="A" control={<Radio required />} label="Cefálica" />
                        <FormControlLabel value="B" control={<Radio />} label="Pélvica" />
                        <FormControlLabel value="C" control={<Radio />} label="Transversa ou oblíqua" />
                    </RadioGroup>
                    <Typography align="justify" style={{ marginTop: "25px" }}>
                    Apresentação cefálica inclui todas as variedade em que a cabeça está para baixo, seja fletida ou qualquer grau de deflexão, incluindo apresentação de face.
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
export default ApresentacaoFetal;