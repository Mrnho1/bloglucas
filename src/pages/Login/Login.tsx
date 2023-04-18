import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../services/Services'
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';

function Login() {

let navigate = useNavigate();

    const[token,setToken] = useLocalStorage('token')

    const [UserLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: '',
    });

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...UserLogin,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(()=>{
        if(token!= ''){
            navigate('/home')
        }
    },[token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`,UserLogin, setToken)
            alert('Usuário logado com sucesso');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar');
        }
    }


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                color="textPrimary"
                                component="h4"
                                align="center"
                                style={{ fontWeight: 'lighter' }}
                            >
                                Entrar
                            </Typography>
                            <TextField
                                value={UserLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    updateModel(e)
                                }
                                id="usuario"
                                label="usuário"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                value={UserLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    updateModel(e)
                                }
                                id="senha"
                                label="senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type="password"
                                fullWidth
                            />
                            <Box marginTop={2} textAlign="center">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Logar
                                    </Button>
                               
                            </Box>
                        </form>
                        <Box
                            display="flex"
                            justifyContent="center"
                            marginTop={2}
                        >
                            <Box marginRight={1}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    align="center"
                                >
                                    Não tem uma conta?
                                </Typography>
                            </Box>
                            <Link to="/cadastro">
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    align="center"
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Cadastre-se
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    xs={6}
                    style={{
                        backgroundImage: `url(https://i.imgur.com/ptWtIKX.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        width: '100vh',
                        minHeight: '100vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Grid>
            </Grid>
        </>
    );
}

export default Login;
