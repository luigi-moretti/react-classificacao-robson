import { Box, TextField, Typography, Grid, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import axios from 'axios';
import Dialogo from '../../components/Dialogo';
import { validaEmail, validarSenha } from '../../models/formulario';


function Contato() {
  const validacoes = {
    email: validaEmail,
    nome: validarSenha,
  }
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMenssagem] = useState('');
  const [erros, setErros] = useState({
    email: { valido: true, texto: "" },
    nome: { valido: true, texto: "" },
  });
  const [open, setOpen] = useState(false);
  const [tituloModal, setTituloModal] = useState('');
  const [corpoModal, setCorpoModal] = useState('');
  const [statusModal, setStatusModal] = useState();
  const [aguardaModal, setAguardaModal] = useState(false);


  function handleOpenClose() {
    setOpen(!open);
  }

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true;
  }

  function handleSubmit(e) {


    axios.post('https://email-res.herokuapp.com/send', {
      name: name,
      email: email,
      message: message
    }).then(response => {
      if (response.status === 200) {
        setTituloModal('Sucesso no envio');
        setCorpoModal('Mensagem enviada com sucesso!');
        setStatusModal(true);
        handleOpenClose();
        limpaForm();
        console.log(response)
      } else {
        setTituloModal('Falha no envio');
        setCorpoModal('Mensagem não enviada!');
        setStatusModal(false);
        handleOpenClose();
        limpaForm();
      }
    })
      .catch(error => {
        setTituloModal('Falha no envio');
        setCorpoModal('Mensagem não enviada!');
        setStatusModal(false);
        handleOpenClose();
        limpaForm();
        console.log(error)
      })

  }

  function limpaForm() {
    setNome('');
    setEmail('');
    setMenssagem('');
    setAguardaModal(false);
  }


  return (
    <Box>
      <Dialogo
        onClose={handleOpenClose}
        titulo={tituloModal}
        corpo={corpoModal}
        open={open}
        status={statusModal}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAguardaModal(true);
          if (possoEnviar()) {
            handleSubmit(e);
          } else {
            setTituloModal('Falha no envio');
            setCorpoModal('Mensagem não enviada!');
            setStatusModal(false);
            handleOpenClose();
            limpaForm();
          }
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
              <Typography>Vamos conversar! Conte-nos sobre sua experiência e sugestões de melhorias.</Typography>
              <Typography>Estamos ansiosos para te ouvir.</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                variant="outlined" fullWidth
                value={name}
                onBlur={validarCampos}
                name="nome"
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="E-mail"
                variant="outlined" fullWidth
                value={email}
                onBlur={validarCampos}
                name="email"
                error={!erros.email.valido}
                helperText={erros.email.texto}
                onChange={(event) => setEmail(event.target.value)}
                required
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
            <Button type="submit" endIcon={aguardaModal ? <CircularProgress size={25} /> : <SendIcon />} variant="contained" color="primary" disabled={aguardaModal}>{aguardaModal ? 'Enviando' : 'Enviar'}</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
export default Contato;