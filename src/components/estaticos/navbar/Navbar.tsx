import React from 'react';
import './Navbar.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <AppBar position="static" className='barra'>
                <Toolbar>
                    <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                       
                    <Link to='/home'>
                         <Box className='cursor'>
                            
                            <Typography variant="h5" color="inherit" className='btn-legal'>
                                BlogPessoal
                            </Typography>
                           
                        </Box>
                        </Link>
                        <Box display="flex" justifyContent="start">
                        <Link to='/home'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='btn-legal'>

                                    home
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/postagens'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='btn-legal'>
                                    postagens
                                </Typography>
                            </Box>
                            </Link>
                            <Link to='/temas'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='btn-legal'>
                                    temas
                                </Typography>
                            </Box>
                            </Link>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='btn-legal'>
                                    cadastrar tema
                                </Typography>
                            </Box>
                            <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='btn-legal'>
                                    logout
                                </Typography>
                                
                            </Box>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
