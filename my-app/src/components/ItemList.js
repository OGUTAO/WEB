// src/components/ItemList.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ItemList() {
  const { items } = useContext(AppContext);

  return (
    <div className="card">
      <h2>Lista:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
