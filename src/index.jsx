import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducers, applyMiddleware(thunk));

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDom.render(
    // applyMiddleware(...middleware),
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);