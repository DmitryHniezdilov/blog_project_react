import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { DropzoneArea } from 'material-ui-dropzone';

import {Avatar, Button, Grid, TextField, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import * as blogAction from '../../redux/actions/blog';
import {useStyles} from './styles';

const PostForm = ({title, content}) => {
    const [ isDropzoneError, setDropzoneError ] = useState(false);
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { handleSubmit, errors, control } = useForm();
    const isEditable = !!title || !!content;

    const onSubmit = async ({title, text, images}) => {
        if (!isEditable && !images[ 0 ]) {
            setDropzoneError(true);

            return;
        }
        const image = !isEditable && images[ 0 ];

        const submitAction = isEditable ? blogAction.updateBlog : blogAction.createBlog;
        const {id} = await dispatch(submitAction(title, text, image));

        if (!id) {
            return;
        }
        history.push(`/blogs/${id}`);
    };

    return (
        <div className = { classes.paper }>
            <Avatar className = { classes.avatar }>
                <CreateIcon />
            </Avatar>
            <Typography
                component = 'h1'
                variant = 'h5'>
                {isEditable ? 'Edit post' : 'Create post'}
            </Typography>
            <form
                className = { classes.form }
                onSubmit = { handleSubmit(onSubmit) }>
                <Grid
                    container
                    spacing = { 2 }>
                    <Grid
                        item
                        xs = { 12 }>
                        <Controller
                            as = {
                                <TextField
                                    autoFocus
                                    fullWidth
                                    error = { !!errors.title?.type }
                                    helperText = { errors.title?.message }
                                    id = 'title'
                                    label = 'Title'
                                    type = 'text'
                                    variant = 'outlined'
                                />
                            }
                            control = { control }
                            defaultValue = { title }
                            name = 'title'
                            rules = {{
                                required: {
                                    value:   true,
                                    message: 'Title is required'},
                                minLength: {
                                    value:   5,
                                    message: 'Title is too short'},
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
                                    multiline
                                    error = { !!errors.text?.type }
                                    helperText = { errors.text?.message }
                                    id = 'text'
                                    label = 'Text'
                                    rows = { 4 }
                                    type = 'text'
                                    variant = 'outlined'
                                />
                            }
                            control = { control }
                            defaultValue = { content }
                            name = 'text'
                            rules = {{
                                required: {
                                    value:   true,
                                    message: 'Text is required'},
                                minLength: {
                                    value:   20,
                                    message: 'Text is too short'},
                            }}
                        />
                    </Grid>
                    {!isEditable && (
                        <Grid
                            item
                            xs = { 12 }>
                            <Controller
                                acceptedFiles = { [ 'image/jpeg, image/png' ] }
                                as = { <DropzoneArea/> }
                                control = { control }
                                defaultValue = ''
                                dropzoneText = { 'Drag and drop an image here or click, max 5MB' }
                                filesLimit = { 1 }
                                maxFileSize = { 5000000 }
                                name = 'images'
                                showAlerts = { [ 'error', 'info' ] }
                            />
                            {isDropzoneError && (
                                <Typography
                                    align = 'center'
                                    className = { classes.error }
                                    color = 'error'
                                    component = 'span'
                                    display = 'block'
                                    variant = 'subtitle1'>
                                    You need to provide image!
                                </Typography>
                            )}
                        </Grid>
                    )}
                </Grid>
                <Button
                    fullWidth
                    className = { classes.submit }
                    color = 'primary'
                    type = 'submit'
                    variant = 'contained'>
                    Publish Post
                </Button>
            </form>
        </div>
    );
};

PostForm.prototype = {
    content: PropTypes.string,
    title:   PropTypes.string,
};

PostForm.defaultProps = {
    content: '',
    title:   '',
};

export default PostForm;
