import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components';
import MirageServer from './MirageServer';
import { store } from './ReduxStore/Store';
import { Provider } from 'react-redux';

MirageServer();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root')
);
