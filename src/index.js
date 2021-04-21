import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InitStore from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <InitStore>
            <App />
        </InitStore>
    </React.StrictMode>,
    document.getElementById('root'),
);
