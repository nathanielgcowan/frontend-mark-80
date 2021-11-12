import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Large from './components/largest';
import Small from './components/smallest';
import About from './components/about';

{/* <App /> */}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<App />}>
        <Route path="large" element={<Large />}/>
        <Route path="small" element={<Small />}/>
        <Route path="large" element={<Large />}/>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<main><p>There's nothing here!</p></main>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
document.getElementById('root')
);

