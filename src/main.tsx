import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store.tsx';

import './assets/styles/normalize.css'
import './assets/styles/global.scss'
import App from './App.tsx'
import {CookiesProvider} from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    </React.StrictMode>,
)
