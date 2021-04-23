import { Box, TextField, Typography, Grid, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import axios from 'axios';

function Contato() {
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMenssagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //const body = JSON.stringify({name, email, message});
    const body = {name, email, message};

    console.log(body);
    
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  body
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
        limpaForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
   
  }

  function limpaForm(){
    setNome('');
    setEmail('');
    setMenssagem('');
  }


  return (
    <Box>
      <form
        onSubmit={ (e)=>{
          handleSubmit(e);
        }
        }
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
              <Typography variant="h4" component="h2">Contato</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Nome"
                variant="outlined" fullWidth
                value={name}
                onChange={(event) => setNome(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="E-mail"
                variant="outlined" fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Mensagem"
                variant="outlined" fullWidth
                multiline
                rows={4}
                rowsMax={8}
                value={message}
                onChange={(event) => setMenssagem(event.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item container justify="flex-end" alignItems="center">
            <Button type="submit" endIcon={<SendIcon/>} variant="contained" color="primary" >Enviar</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
export default Contato;