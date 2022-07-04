import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename='/colemanleggett'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
