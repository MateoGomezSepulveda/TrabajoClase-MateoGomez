import React from 'react';

function ListaProducto({listaProducto, eliminarProdcuto, comprarOalternar }){
  return(
    <ul>
      {listaProducto.map((producto, index) =>(
        <li key={index}>
          {producto.name} - Comprado: {producto.purchased ? 'Si' : 'No'}
          <button onClick={() => comprarOalternar(index)}>
            {producto.purchased ? 'No comprado' : 'Comprado'}
          </button>
          <button onClick={() => eliminarProdcuto(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaProducto;