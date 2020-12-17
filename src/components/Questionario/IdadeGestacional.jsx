import { FormControlLabel, RadioGroup, Radio, Typography, Grid, Button, List, ListItem, ListItemText} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';

function IdadeGestacional({ aoEnviar, aoVoltar }) {
    const [idadeGestacional, setIdadeGestacional] = useState('');

    return (
        <form
            style={{ height: "79vh" }}
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ idadeGestacional });
            }}
        >
            <Grid
                container
                direction="column"
                justify="space-between"
                
                style={{ height: "100%" }}
            >
                <Grid container item direction="column">
                    <Typography variant="h4" component="h2">Idade Gestacional</Typography>
                    <RadioGroup
                        onChange={
                            event => setIdadeGestacional(event.target.value)
                        }
                    >
                        <FormControlLabel value="A" control={<Radio required />} label="Termo, única" />
                        <FormControlLabel value="B" control={<Radio />} label="Pré-termo, única" />
                        <FormControlLabel value="C" control={<Radio />} label="Múltipla" />
                    </RadioGroup>
                    <Typography align="justify" paragraph style={{ marginTop: "25px" }} >
                        Definições:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText>Termo ≥ 37 semanas</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Pré-termo a 37 semanas</ListItemText>
                        </ListItem>
                    </List>
                    <Typography align="justify" paragraph>
                        Gestação múltipla inclui casos onde um ou mais fetos tenham morrido após 22 semanas ou 500g.
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
export default IdadeGestacional;