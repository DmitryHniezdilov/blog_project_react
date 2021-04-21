import React from 'react';
import Grid from '@material-ui/core/Grid';
import {CssBaseline, Container} from '@material-ui/core';
import Auth from '../../containers/auth';
import {useStyles} from './styles';

const Authentication = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems = 'center'
            className = { classes.authentication }
            justify = 'center'>
            <Grid
                item
                xs = { 10 }>
                <Container
                    component = 'main'
                    maxWidth = 'xs'>
                    <CssBaseline />
                    <Auth/>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Authentication;
