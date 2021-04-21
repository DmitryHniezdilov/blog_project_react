import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import PageLayout from '../../components/pageLayout';
import { CardContent, Typography, Popover, Button, Box} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SinglePost from '../../components/singlePost';
import * as blogAction from '../../redux/actions/blog';
import {useStyles} from './styles';

const Blog = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = useState(null);
    const history = useHistory();
    const { params } = useRouteMatch();
    const {blogId} = params;
    const { blog } = useSelector((state) => state.blog);
    const {name} = useSelector((state) => state.general);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;

    useEffect(() => {
        dispatch(blogAction.getBlogById(blogId));
    }, []);

    const deletePost = async () => {
        const {id} = await dispatch(blogAction.deleteBlog(blogId));
        if (!id) {
            return;
        }

        history.push('/');
    };

    return (
        <PageLayout >
            <Box
                className = { classes.blogWrap }>
                { name && (
                    <>
                        <Button
                            size = 'small'
                            style = {{marginRight: '16px'}}
                            variant = 'outlined'
                            onClick = { () => history.push('/edit') }>
                            Edit post
                        </Button>
                        <Button
                            aria-describedby = { id }
                            size = 'small'
                            variant = 'outlined'
                            onClick = { handleClick }>
                            Delete post
                        </Button>
                        <Popover
                            anchorEl = { anchorEl }
                            anchorOrigin = {{
                                vertical:   'top',
                                horizontal: 'left',
                            }}
                            id = { id }
                            open = { open }
                            transformOrigin = {{
                                vertical:   'top',
                                horizontal: 'left',
                            }}
                            onClose = { handleClose }>
                            <CardContent>
                                <Typography
                                    align = 'center'
                                    component = 'span'
                                    display = 'block'
                                    style = {{marginBottom: '8px'}}
                                    variant = 'button'>
                                    Are you shure?
                                </Typography>
                                <Button
                                    color = 'secondary'
                                    size = 'small'
                                    startIcon = { <DeleteIcon /> }
                                    variant = 'contained'
                                    onClick = { deletePost }>
                                    Delete post
                                </Button>
                            </CardContent>

                        </Popover>
                    </>
                ) }
                {!!blog && (
                    <SinglePost blog = { blog }/>
                )}
            </Box>
        </PageLayout>
    );
};

export default Blog;
