import React from 'react';
import ReactDom from 'react-dom';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import App from './Components/App';
import "./index.css";
import { BrowserRouter as Router } from ‘react-router-dom’

// import * as reducers from './store/reducers';
// const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDom.render(
  // <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      < App />
    </Router>,
  // </Provider>,
  document.querySelector('#root')
);
