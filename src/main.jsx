import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
/*import 'bootstrap/dist/css/bootstrap.min.css';// IMPORTACION DE ESTILOS DE BOSTRAP*/
import "bootswatch/dist/cerulean/bootstrap.min.css";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
