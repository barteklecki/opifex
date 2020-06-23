import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto/latin-ext.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

