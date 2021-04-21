import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import {Toolbar, Button, Link, Typography, Switch, Grid} from '@material-ui/core';
import * as generalAction from '../../redux/actions/general';
import {useStyles} from './styles';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const {name: isAuth, isDarkTheme} = useSelector((state) => state.general);

    const authHandler = () => {
        if (isAuth) {
            dispatch(generalAction.logOut());

            return;
        }

        history.push('/auth');
    };

    const createHandler = () => history.push('/create');

    const handleThemeChange = () => {
        dispatch(generalAction.setDarkTheme(!isDarkTheme));
    };

    return (
        <Toolbar className = { classes.toolbar }>
            <Grid
                container
                alignItems = 'center'
                spacing = { 2 }>
                <Grid
                    item
                    md = { 5 }
                    xs = { 2 }>
                    <Switch
                        checked = { isDarkTheme }
                        onChange = { handleThemeChange }
                    />
                </Grid>
                <Grid
                    item
                    className = { classes.toolbarTitle }
                    md = { 2 }
                    xs = { 12 }>
                    <Link
                        noWrap
                        color = 'inherit'
                        component = { RouterLink }
                        to = '/'
                        variant = 'body2'>
                        <Typography
                            align = 'center'
                            color = 'inherit'
                            component = 'h2'
                            display = 'inline'
                            variant = 'h5'>
                            Test Blog
                        </Typography>
                    </Link>
                </Grid>
                <Grid
                    item
                    align = 'right'
                    md = { 5 }
                    xs = { 10 }>
                    <>
                        { isAuth && (
                            <>
                                <Typography
                                    color = 'inherit'
                                    component = 'span'
                                    display = 'inline'
                                    variant = 'body1'>
                                    Hi,&nbsp;{isAuth}
                                </Typography>
                                <Button
                                    size = 'small'
                                    style = {{marginLeft: '16px'}}
                                    variant = 'outlined'
                                    onClick = { createHandler }>
                                    Create post
                                </Button>
                            </>
                        ) }

                        <Button
                            size = 'small'
                            style = {{marginLeft: '16px'}}
                            variant = 'outlined'
                            onClick = { authHandler }>
                            { isAuth ? 'Log out' : 'Sign up' }
                        </Button>
                    </>
                </Grid>
            </Grid>
        </Toolbar>
    );
};

export default Header;
