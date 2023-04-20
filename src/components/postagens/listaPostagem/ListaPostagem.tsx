import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { getAll } from '../../../services/Services'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  async function getAllPostagens() {
    await getAll('/postagens', setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getAllPostagens()
  }, [])

  useEffect(() => {
    if(token === '') {
      alert('Efetue o login')
      history('/login')
    }
  }, [])

  return (
    <>
      {
        postagens.map((postagem) => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${postagem.id}`} >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`}>
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;