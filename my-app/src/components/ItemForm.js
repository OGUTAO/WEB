// src/components/ItemForm.js
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ItemForm() {
  const [name, setName] = useState('');
  const { addItem } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addItem({ name });
      setName('');
    }
  };

  return (
    <div className="card">
      <h2>Adicione seus itens:</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nome do Item" 
          required 
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default ItemForm;
