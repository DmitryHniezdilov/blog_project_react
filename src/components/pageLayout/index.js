import React from 'react';
import { Box, CssBaseline, Container  } from '@material-ui/core';
import Footer from '../footer';
import Header from '../../containers/header';
import Categories from '../../containers/categories';
import {useStyles} from './styles';

const PageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <Box
            className = { classes.pageLayout }>
            <CssBaseline />
            <Container
                className = { classes.container }
                maxWidth = 'lg'>
                <Header/>
                <Categories />

                <main className = { classes.toolbar }>{children}</main>

            </Container>
            <Footer />
        </Box>
    );
};

export default PageLayout;
