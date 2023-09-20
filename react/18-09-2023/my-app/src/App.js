import React, { useState } from 'react';

function App() {
    
}

const addItem = () =>{
    if(newItem.trim() === '') return;
    setItems([...items, newItem]);
    setNewItem('');
};

const updateItem = (index, updatedItem) =>{
    const updatedItem = [...items];
    updatedItem[index] = updatedItem;
    setItem(updatedItem);
    setEditingIndex(-1);
};



export default App;
