// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { AppProvider } from './context/AppContext';
import './App.css'; // Import App.css for specific component styling
import './index.css'; // Import index.css for global styling

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<div className="card"><h1>Menu Principal</h1></div>} />
            <Route path="/add-item" element={<ItemForm />} />
            <Route path="/items" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
