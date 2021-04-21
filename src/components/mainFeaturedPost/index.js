import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import {Paper, Typography, Grid, Link} from '@material-ui/core';
import {useStyles} from './styles';

const MainFeaturedPost = ({blog}) => {
    const { title, image, id } = blog;
    const classes = useStyles();
    const {url: imageUrl} = image[ 0 ] || {};

    return (
        <Paper
            className = { classes.mainFeaturedPost }
            style = {{ backgroundImage: `url(${imageUrl})` }}>
            <div className = { classes.overlay } />
            <Grid container>
                <Grid
                    item
                    md = { 6 }>
                    <div className = { classes.mainFeaturedPostContent }>
                        <Typography
                            gutterBottom
                            color = 'inherit'
                            component = 'h1'
                            variant = 'h3'>
                            {title}
                        </Typography>
                        <Link
                            component = { RouterLink }
                            to = { `/blogs/${id}` }
                            variant = 'subtitle1'>
                            Continue reading..
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

MainFeaturedPost.prototype = {
    blog: PropTypes.object,
};

export default MainFeaturedPost;
