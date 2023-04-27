import React, { useEffect } from 'react';
import './Home.css'
import { Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className='caixa'
                
            >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={15}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className='titulo'
                        >
                            Seja bem vindo(a)!
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                            color="textPrimary"
                            component="h5"
                            align="center"
                            className='titulo'
                        >
                            expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Button
                            variant="outlined"
                            style={{
                                borderColor: 'white',
                                backgroundColor: '#912a7eaa',
                                color: 'white',
                            }}
                        >
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img
                        src="https://i.imgur.com/FU2wVHU.png"
                        alt=""
                        width="80%"
                        height="80%"
                    />
                </Grid>
                <Grid xs={12} className='postagens'><TabPostagem/></Grid>
            </Grid>
        </>
    );
}

export default Home;
