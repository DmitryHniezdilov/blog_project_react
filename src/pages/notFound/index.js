import React from 'react';
import { Typography } from '@material-ui/core';
import PageLayout from '../../components/pageLayout';

const NotFound = () => {
    return (
        <PageLayout>
            <Typography
                style = {{marginTop: '16px'}}
                variant = 'h4'>
                Page not found
            </Typography>
        </PageLayout>
    );
};

export default NotFound;
