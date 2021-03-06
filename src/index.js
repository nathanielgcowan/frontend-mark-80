import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import rootReducer from './reducers/index';
import './index.css';
import App from './App';
import Food from './containers/food';
import Large from './components/largest';
import Small from './components/smallest';
import About from './components/about';

// Redux DevTools
let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, reduxDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  {/* // store holds the state */}
    <Router>
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<App />}>
          <Route path="food" element={<Food />}/>
          <Route path="small" element={<Small />}/>
          <Route path="large" element={<Large />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<main><p>There's nothing here!</p></main>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>,
document.getElementById('root')
);

// Connect to Redux DevTools
// 1. store 2. store stores data 3. reducer takes action, updates store
// 4. thunk makes async fetches 5. store sends actions to reducer then sets state.

