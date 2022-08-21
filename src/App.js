/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import NotFound from './pages/NotFound';
import './styles/reset.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
