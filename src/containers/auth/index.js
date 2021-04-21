import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {Avatar, Button, TextField, Link, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as authorizationAction from '../../redux/actions/general';
import {useStyles} from './styles';

const Auth = () => {
    const classes = useStyles();
    const history = useHistory();
    const [ isRegistration, setStateRegistration ] = useState(true);
    const dispatch = useDispatch();
    const {name, errorMessage} = useSelector((state) => state.general);
    const { handleSubmit, errors, control, reset } = useForm();

    useEffect(() => {
        if (name) {
            history.push('/');
        }
    }, [ name ]);

    useEffect(() => {
        reset();
    }, [ isRegistration, errorMessage ]);

    const onSubmit = ({username, email, password}) => {
        if (isRegistration) {
            dispatch(authorizationAction.getRegistration(username, email, password));

            return;
        }

        dispatch(authorizationAction.getLogin(email, password));
    };

    const removeErrorMessage = () => {
        if (errorMessage) {
            dispatch(authorizationAction.removeAuthErrorMessage());
        }
    };

    const onFormChange = () => {
        setStateRegistration(!isRegistration);
        removeErrorMessage();
    };

    return (
        <div className = { classes.paper }>
            <Avatar className = { classes.avatar }>
                <LockOutlinedIcon />
            </Avatar>
            <Typography
                component = 'h1'
                variant = 'h5'>
                { isRegistration ? 'Sign up' : 'Sign in'}
            </Typography>
            <form
                className = { classes.form }
                onSubmit = { handleSubmit(onSubmit) }>
                <Grid
                    container
                    spacing = { 2 }>
                    { isRegistration && (
                        <Grid
                            item
                            xs = { 12 }>
                            <Controller
                                as = {
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        error = { !!errors.username?.type }
                                        helperText = { errors.username?.message }
                                        id = 'username'
                                        label = 'User Name'
                                        type = 'text'
                                        variant = 'outlined'
                                    />
                                }
                                control = { control }
                                defaultValue = ''
                                name = 'username'
                                rules = {{
                                    required: {
                                        value:   true,
                                        message: 'User Name is required'},
                                    minLength: {
                                        value:   2,
                                        message: 'User Name is too short'},
                                    maxLength: {
                                        value:   20,
                                        message: 'Max length exceeded'},
                                }}
                            />
                        </Grid>
                    )}
                    <Grid
                        item
                        xs = { 12 }>
                        <Controller
                            as = {
                                <TextField
                                    fullWidth
                                    error = { !!errors.email?.type }
                                    helperText = { errors.email?.message }
                                    id = 'email'
                                    label = 'Email'
                                    type = 'email'
                                    variant = 'outlined'
                                />
                            }
                            control = { control }
                            defaultValue = ''
                            name = 'email'
                            rules = {{
                                required: {
                                    value:   true,
                                    message: 'Email is required'},
                                pattern: {
                                    value:   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Entered value does not match email format'},
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs = { 12 }>
                        <Controller
                            as = {
                                <TextField
                                    fullWidth
                                    error = { !!errors.password?.type }
                                    helperText = { errors.password?.message }
                                    id = 'password'
                                    label = 'Password'
                                    type = 'password'
                                    variant = 'outlined'
                                />
                            }
                            control = { control }
                            defaultValue = ''
                            name = 'password'
                            rules = {{
                                required: {
                                    value:   true,
                                    message: 'User Name is required'},
                                pattern: {
                                    value:   /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/i,
                                    message: 'Password must contain at least one letter, at least one number, and be longer than six characters.'},
                            }}
                        />
                    </Grid>
                </Grid>

                { errorMessage && (
                    <Typography
                        className = { classes.error }
                        color = 'error'>
                        {errorMessage}
                    </Typography>
                )}

                <Button
                    fullWidth
                    className = { classes.submit }
                    color = 'primary'
                    type = 'submit'
                    variant = 'contained'>
                    Sign Up
                </Button>
            </form>
            <Grid
                container
                justify = 'flex-end'>
                <Grid item>
                    <Link
                        component = 'button'
                        variant = 'body2'
                        onClick = { onFormChange }>
                        { isRegistration ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign Up' }
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Auth;
