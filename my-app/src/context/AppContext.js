
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <AppContext.Provider value={{ items, addItem }}>
      {children}
    </AppContext.Provider>
  );
};
