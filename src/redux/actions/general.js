import * as types from '../actionTypes';
import * as Api from '../../api/api';

export const startLoading = () => ({ type: types.START_LOADING });
export const finishLoading = () => ({ type: types.FINISH_LOADING });

const initAuthData = (dispatch, name, userID, token) => {
    dispatch({type: types.SET_AUTH_DATA, name, userID, token});

    localStorage.setItem('name', name);
    localStorage.setItem('userID', userID);
    localStorage.setItem('token', token);
};

export const setDarkTheme = (isDarkTheme) => {
    if (!isDarkTheme) {
        localStorage.removeItem('isDarkTheme');
    } else {
        localStorage.setItem('isDarkTheme', isDarkTheme);
    }

    return {type: types.SET_DARK_THEME, isDarkTheme };
};

const setAuthErrorMessage = (message) => ({type: types.SET_AUTH_ERROR_MESSAGE, message });

export const removeAuthErrorMessage = () => ({ type: types.REMOVE_AUTH_ERROR_MESSAGE });

export const getRegistration = (username, email, password) => async (dispatch) => {
    startLoading();
    const {jwt, user, error, message} = await Api.getRegistration(username, email, password);

    if (error) {
        dispatch(setAuthErrorMessage(message[ 0 ].messages[ 0 ].message));
        finishLoading();

        return;
    }

    initAuthData(dispatch, user.username, user.id, jwt);
    finishLoading();
};

export const getLogin = (email, password) => async (dispatch) => {
    startLoading();
    const {jwt, user, error, message} = await Api.getLogin(email, password);

    if (error) {
        dispatch(setAuthErrorMessage(message[ 0 ].messages[ 0 ].message));
        finishLoading();

        return;
    }

    initAuthData(dispatch, user.username, user.id, jwt);
    finishLoading();
};

export const logOut = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('userID');
    localStorage.removeItem('token');

    return {type: types.REMOVE_AUTH_DATA};
};

export const initialization = () => (dispatch) =>  {
    const name = localStorage.getItem('name');
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    const isDarkTheme = localStorage.getItem('isDarkTheme');

    if (isDarkTheme) {
        dispatch({type: types.SET_DARK_THEME, isDarkTheme: true });
    }

    if (!name || !userID || !token) {
        return;
    }

    dispatch({type: types.SET_AUTH_DATA, name, userID, token});
};
