import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import blog from './reducers/blog';
import general from './reducers/general';

const rootReducer = combineReducers({
    blog,
    general,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const InitStore = ({ children }) => (
    <Provider store = { store }>
        {children}
    </Provider>
);

export default InitStore;
