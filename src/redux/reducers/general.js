import * as types from '../actionTypes';

const initialState = {
    isLoading:    false,
    userID:       null,
    token:        null,
    name:         null,
    errorMessage: null,
    isDarkTheme:  false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case types.FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            };

        case types.SET_AUTH_DATA: {
            return {
                ...state,
                userID: action.userID,
                token:  action.token,
                name:   action.name,
            };
        }

        case types.SET_DARK_THEME: {
            return {
                ...state,
                isDarkTheme: action.isDarkTheme,
            };
        }

        case types.REMOVE_AUTH_DATA: {
            return {
                ...state,
                userID: null,
                token:  null,
                name:   null,
            };
        }

        case types.SET_AUTH_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.message,
            };
        }

        case types.REMOVE_AUTH_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: null,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
