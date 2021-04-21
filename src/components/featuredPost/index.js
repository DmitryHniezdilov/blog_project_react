import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Hidden} from '@material-ui/core';
import {useStyles} from './styles';

const FeaturedPost = ({blog}) => {
    const classes = useStyles();
    const { image, published_at, title, id } = blog;
    const {url: imageUrl, name: imageName} = image[ 0 ] || {};
    const dateNormalize = new Date(published_at).toDateString();

    return (
        <Grid
            item
            md = { 6 }
            xs = { 12 }>
            <CardActionArea
                component = { Link }
                to = { `/blogs/${id}` }>
                <Card className = { classes.card }>
                    <div className = { classes.cardDetails }>
                        <CardContent>
                            <Typography
                                component = 'h2'
                                variant = 'h5'>
                                {title}
                            </Typography>
                            <Typography
                                color = 'textSecondary'
                                variant = 'subtitle1'>
                                {dateNormalize}
                            </Typography>
                            <Typography
                                color = 'primary'
                                variant = 'subtitle1'>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                            className = { classes.cardMedia }
                            component = 'img'
                            image = { imageUrl }
                            title = { imageName }
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

FeaturedPost.prototype = {
    blog: PropTypes.object,
};

export default FeaturedPost;
