import React from 'react';
import PropTypes from 'prop-types';
import {Typography, CardContent, CardMedia} from '@material-ui/core';
import {useStyles} from './styles';

const SinglePost = ({blog}) => {
    const classes = useStyles();
    const { image, published_at, title } = blog;
    const {url: imageUrl, name: imageName} = image[ 0 ] || {};
    const dateString = new Date(published_at).toDateString();
    const dateHours = new Date(published_at).getHours();
    const dateMinutes = new Date(published_at).getMinutes();
    const dateNormalize = `${dateString} ${dateHours}:${dateMinutes}`;

    return (
        <CardContent>
            <Typography
                component = 'h2'
                variant = 'h5'>
                {title}
            </Typography>
            <Typography
                color = 'textSecondary'
                style = {{marginBottom: '12px'}}
                variant = 'subtitle1'>
                {dateNormalize}
            </Typography>
            <CardMedia
                className = { classes.cardMedia }
                component = 'img'
                image = { imageUrl }
                title = { imageName }
            />
            <Typography
                paragraph
                style = {{marginTop: '12px'}}
                variant = 'subtitle1'>
                {blog.content}
            </Typography>
        </CardContent>
    );
};

SinglePost.prototype = {
    blog: PropTypes.object,
};

export default SinglePost;
