import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import {BrowserRouter as Router} from 'react-router-dom'
const store = createStore(rootReducer,initState() ,applyMiddleware(thunk))


store.subscribe(()=>{
  localStorage.setItem('reduxState',JSON.stringify(store.getState()))
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

