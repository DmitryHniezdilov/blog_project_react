import React from 'react';
import { Container, Box, IconButton, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import {useStyles} from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className = { classes.footer }>
            <Container maxWidth = 'lg'>
                <Typography
                    gutterBottom
                    align = 'center'
                    variant = 'h6'>
                    Footer
                </Typography>
                <Box
                    align = 'center'>
                    <Typography
                        color = 'textSecondary'
                        component = 'span'
                        variant = 'subtitle1'>
                        Test Blog by Dmitry Hniezdilov:&nbsp;
                    </Typography>
                    <IconButton
                        component = { Link }
                        href = 'https://github.com/DmitryHniezdilov'
                        rel = 'noreferrer'
                        size = 'small'
                        style = {{color: '#d1d5da'}}
                        target = '_blank'>
                        <GitHubIcon />
                    </IconButton>
                </Box>

            </Container>
        </footer>
    );
};

export default Footer;
