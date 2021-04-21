import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange,
} from '@material-ui/core/colors';
import Loading from './components/loading';
import Authentication from './pages/authentication';
import Main from './pages/main/';
import NotFound from './pages/notFound';
import Category from './pages/category';
import Create from './pages/create';
import Blog from './pages/blog';
import Edit from './pages/edit';
import * as authorizationAction from './redux/actions/general';
import './index.scss';

const App = () => {
    const dispatch = useDispatch();
    const {name: isAuth, isDarkTheme} = useSelector((state) => state.general);
    const palletType = isDarkTheme ? 'dark' : 'light';
    const mainPrimaryColor = isDarkTheme ? orange[ 500 ] : lightBlue[ 500 ];
    const mainSecondaryColor = isDarkTheme ? deepOrange[ 900 ] : deepPurple[ 500 ];
    const darkThemeStyle = createMuiTheme({
        palette: {
            type:    palletType,
            primary: {
                main: mainPrimaryColor,
            },
            secondary: {
                main: mainSecondaryColor,
            },
        },
    });

    useEffect(() => {
        dispatch(authorizationAction.initialization());
    }, []);

    return (
        <ThemeProvider theme = { darkThemeStyle }>
            <Router>
                <Loading/>
                <Switch>
                    <Route
                        exact
                        key = '/'
                        path = '/'>
                        <Main/>
                    </Route>
                    <Route
                        exact
                        key = 'category'
                        path = '/categories'>
                        <Category/>
                    </Route>
                    <Route
                        exact
                        key = 'auth'
                        path = '/auth'>
                        <Authentication/>
                    </Route>
                    <Route
                        exact
                        key = 'blog'
                        path = '/blogs/:blogId'>
                        <Blog/>
                    </Route>
                    { isAuth && (
                        <Route
                            exact
                            key = 'create'
                            path = '/create'>
                            <Create/>
                        </Route>
                    )}
                    { isAuth && (
                        <Route
                            exact
                            key = 'edit'
                            path = '/edit'>
                            <Edit/>
                        </Route>
                    )}
                    <Route path = '*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
