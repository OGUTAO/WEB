// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/add-item">Adicionar Itens</Link></li>
        <li><Link to="/items">Lista De Itens</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
