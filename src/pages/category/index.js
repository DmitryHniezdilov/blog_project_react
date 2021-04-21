import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import PageLayout from '../../components/pageLayout';
import FeaturedPost from '../../components/featuredPost';
import * as blogAction from '../../redux/actions/blog';
import {useStyles} from './styles';


const Category = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const { hash } = useLocation();
    const { categories, blogs } = useSelector((state) => state.blog);
    const blogsNormalize = [ ...blogs ].reverse();
    const category = hash.split('#')[ 1 ];
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        const isCategoryExists = categories.some((item) => item.category === category);
        if (!isCategoryExists && !!categories.length) {
            const backupRoute = `categories#${categories[ 0 ].category}`;

            history.push(backupRoute);
        }

        dispatch(blogAction.getBlogsByCategory(category));
    }, [ hash, categories, category ]);

    return (
        <PageLayout>
            <Typography
                align = 'center'
                className = { classes.categoryTitle }
                variant = 'h5'>
                {`' ${capitalizeFirstLetter(category)} '`}
            </Typography>
            {!!blogsNormalize.length && (
                <Grid
                    container
                    spacing = { 4 }>
                    {blogsNormalize.map((blog) => (
                        <FeaturedPost
                            blog = { blog }
                            key = { blog.id }
                        />
                    ))}
                </Grid>
            )}
            {!blogsNormalize.length && (
                <Typography
                    style = {{marginTop: '16px'}}
                    variant = 'h5'>
                    No blogs in this category
                </Typography>
            )}
        </PageLayout>
    );
};

export default Category;
