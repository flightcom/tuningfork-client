// @flow

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';
import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './store';
import { translationMessages } from './i18n';

// Global styles
import 'sanitize.css/sanitize.css';
import './styles/global';
import './styles/plugins';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// TODO: Check if need to do special hot reloading for i18n files (like in react-boilerplate)
const renderApp = (messages) => {
    render(
        <Provider store={store}>
            <LanguageProvider messages={messages}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </LanguageProvider>
        </Provider>,
        document.getElementById('app')
    );
};

renderApp(translationMessages);
