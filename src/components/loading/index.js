import React from 'react';
import {useSelector} from 'react-redux';
import { Box, CircularProgress } from '@material-ui/core';
import {useStyles} from './styles';

const Loading = () => {
    const classes = useStyles();
    const {isLoading} = useSelector((state) => state.general);
    const activeLoading = isLoading ? 'flex' : '';

    return (
        <Box
            className = { classes.loading }
            style = {{display: `${activeLoading}`}}>
            <CircularProgress/>
        </Box>
    );
};

export default Loading;
