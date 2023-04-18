import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Grid, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
// import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid alignItems="center" item xs={12}>
                    <Box>
                        <Box className="box1"   >
                            <Box
                                paddingTop={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                    style={{ color: 'white' }}
                                >
                                    Siga-nos nas redes sociais{' '}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <a
                                    href="https://github.com/Mrnho1"
                                    target="_blank"
                                >
                                    <GitHubIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/marinholzn/"
                                    target="_blank"
                                >
                                    <InstagramIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lucas-da-silva-marinho-6462b4255/"
                                    target="_blank"
                                >
                                    <LinkedInIcon
                                        className='rs'
                                    />
                                </a>
                            </Box>
                        </Box>
                        <Box
                           className='box2'
                        >
                            <Box paddingTop={1}>
                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    gutterBottom
                                    className='textos'
                                >
                                    © 2020 Copyright:
                                </Typography>
                            </Box>
                            <Box>
                                <a
                                    target="_blank"
                                    href="https://brasil.generation.org"
                                >
                                    <Typography
                                        variant="subtitle2"
                                        gutterBottom
                                        className='textos'
                                        align="center"
                                    >
                                        brasil.generation.org
                                    </Typography>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
            <Grid container className="box1" justifyContent="space-around" >
                <Grid  xs={8} sm={3} style={{background:'black'}} >
                 <Box className="box1"   >
                            <Box
                                paddingTop={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                    style={{ color: 'white' }}
                                >
                                    Siga nas redes sociais{' '}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <a
                                    href="https://github.com/Mrnho1"
                                    target="_blank"
                                >
                                    <GitHubIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/marinholzn/"
                                    target="_blank"
                                >
                                    <InstagramIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lucas-da-silva-marinho-6462b4255/"
                                    target="_blank"
                                >
                                    <LinkedInIcon
                                        className='rs'
                                    />
                                </a>
                            </Box>
                            </Box> 
                           
                </Grid>
                <Grid item xs={8} sm={3}>
                <Box className="box1" >
                            <Box
                                paddingTop={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                    style={{ color: 'white' }}
                                >
                                    Siga nas redes sociais{' '}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <a
                                    href="https://github.com/Mrnho1"
                                    target="_blank"
                                >
                                    <GitHubIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/marinholzn/"
                                    target="_blank"
                                >
                                    <InstagramIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lucas-da-silva-marinho-6462b4255/"
                                    target="_blank"
                                >
                                    <LinkedInIcon
                                        className='rs'
                                    />
                                </a>
                            </Box>
                            </Box>
                    
                </Grid>
                <Grid item xs={8} sm={3}>
                <Box className="box1"   >
                            <Box
                                paddingTop={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    gutterBottom
                                    style={{ color: 'white' }}
                                >
                                    Siga nas redes sociais{' '}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <a
                                    href="https://github.com/Mrnho1"
                                    target="_blank"
                                >
                                    <GitHubIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/marinholzn/"
                                    target="_blank"
                                >
                                    <InstagramIcon
                                        className='rs'
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lucas-da-silva-marinho-6462b4255/"
                                    target="_blank"
                                >
                                    <LinkedInIcon
                                        className='rs'
                                    />
                                </a>
                            </Box>
                            </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
