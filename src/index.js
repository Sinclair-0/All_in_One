import * as React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Mimic from './pages/Mimic';
import Home from './pages/Home';
import Randomizer from './pages/Randomizer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <App />
      
    <Routes>
          <Route path = '/' element={<Home />} />
          <Route path="/mimic" element={<Mimic />} />
          <Route path="/randomizer" element={<Randomizer />} />
    </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
