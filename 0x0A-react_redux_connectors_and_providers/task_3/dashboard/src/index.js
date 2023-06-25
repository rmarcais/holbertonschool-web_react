import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import App from './App/App';

const store = createStore(uiReducer, composeWithDevTools(applyMiddleware(thunk)));

const rootId = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, rootId
);
