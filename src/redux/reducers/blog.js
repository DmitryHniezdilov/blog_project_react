import * as types from '../actionTypes';

const initialState = {
    categories: [],
    blogs:      [],
    blog:       {
        image: [],
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories,
            };
        }

        case types.SET_BLOGS: {
            return {
                ...state,
                blogs: action.blogs,
            };
        }

        case types.SET_BLOG: {
            return {
                ...state,
                blog: action.blog,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
