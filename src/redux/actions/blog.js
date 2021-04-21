import * as types from '../actionTypes';
import * as Api from '../../api/api';

export const setCategories = () => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const categories = await Api.getCategories();

    dispatch({type: types.SET_CATEGORIES, categories});
    dispatch({type: types.FINISH_LOADING});
};

export const getBlogs = () => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const blogs = await Api.getBlogs();

    dispatch({type: types.SET_BLOGS, blogs});
    dispatch({type: types.FINISH_LOADING});
};

export const getBlogsByCategory = (category) => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const blogs = await Api.getBlogsByCategory(category);

    dispatch({type: types.SET_BLOGS, blogs});
    dispatch({type: types.FINISH_LOADING});
};

export const getBlogById = (id) => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const blog = await Api.getBlogById(id);

    dispatch({type: types.SET_BLOG, blog});
    dispatch({type: types.FINISH_LOADING});
};

export const uploadImage = (image, id, token) => {
    const formData = new FormData();
    formData.append('ref', 'blog');
    formData.append('refId', id);
    formData.append('field', 'image');
    formData.append('files', image, image.name);

    return Api.uploadImage(formData, token);
};

export const createBlog = (title, content, image) => async (dispatch, getState) => {
    const { general } = getState();
    const {token} = general;

    dispatch({type: types.START_LOADING});

    const blog = await Api.createBlog(title, content, token);
    const {id} = blog;
    await uploadImage(image, id, token);

    dispatch({type: types.FINISH_LOADING});

    return blog;
};

export const updateBlog = (title, content) => async (dispatch, getState) => {
    const { general, blog } = getState();
    const {token} = general;
    const {id} = blog.blog;
    dispatch({type: types.START_LOADING});

    const updateBlog = await Api.updateBlog(id, title, content, token);

    dispatch({type: types.FINISH_LOADING});

    return updateBlog;
};

export const deleteBlog = (id) => async (dispatch, getState) => {
    const { general } = getState();
    const {token} = general;

    dispatch({type: types.START_LOADING});

    const deleteBlog = await Api.deleteBlog(id, token);

    dispatch({type: types.FINISH_LOADING});

    return deleteBlog;
};
