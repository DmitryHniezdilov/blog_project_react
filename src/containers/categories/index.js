import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {Toolbar, Link} from '@material-ui/core';
import * as blogAction from '../../redux/actions/blog';
import {useStyles} from './styles';

const Categories = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.blog);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        if (!categories.lenght) {
            dispatch(blogAction.setCategories());
        }
    }, []);

    return (
        <Toolbar
            className = { classes.toolbarSecondary }
            component = 'nav'
            variant = 'dense'>
            {!categories.lenght && categories.map(({category, id}) => (
                <Link
                    noWrap
                    className = { classes.toolbarLink }
                    color = 'inherit'
                    component = { RouterLink }
                    key = { id }
                    to = { `/categories#${category}` }
                    variant = 'body2'>
                    {capitalizeFirstLetter(category)}
                </Link>
            ))}
        </Toolbar>
    );
};

export default Categories;
