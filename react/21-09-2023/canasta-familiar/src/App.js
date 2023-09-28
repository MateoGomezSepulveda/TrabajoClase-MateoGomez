import React, { useState } from 'react';
import ListaProducto from './components/ListaProducto';

function App(){ 

  // este es el estado para almacenar la lista de productos
  const [listaProducto, setListaProducto] = useState([]);

  // esta es una funcion que sirve para agregar un nuevo producto a la lista
  const addProducto = (name) =>{
    const newProucto = { name, purchased: false };
    setListaProducto([...listaProducto, newProucto]);
  };

  // esta es una funcion para eliminar una funcion de la lista
  const eliminarProdcuto = (index) =>{
    const actualizarLista = [...listaProducto];
    actualizarLista.splice(index, 1);
    setListaProducto(actualizarLista);
  };

  // esta es la funcion para actualizr el estado de compra de un producto
  const comprarOalternar = (index) =>{
    const actualizarLista = [...listaProducto];
    actualizarLista[index].purchased = !actualizarLista[index].purchased;
    setListaProducto(actualizarLista);
  }

  return (
    <div>
      <h1>Canasta Familiar</h1>
      {/* Componente para agregar Productos */}
      
      {/* Componente para mostrar la lista de productos */}
      <ListaProducto
      listaProducto={listaProducto}
      eliminarProdcuto={eliminarProdcuto}
      comprarOalternar={comprarOalternar}
      />
    </div>
  );
}

export default App;