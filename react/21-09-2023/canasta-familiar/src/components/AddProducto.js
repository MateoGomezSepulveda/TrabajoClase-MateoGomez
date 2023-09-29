import React, {useState} from 'react';

function AddProducto({ addProdcuto}){

  // Estado para el nombre del nuevo producto
  const [nombreProducto, setNombreProducto] = useState('');

  // Manejar cambios en el campo de entrada de texto 
  const manejarCambioEntrada = (event) =>{
    setNombreProducto(event.target.value);
  };

  // agregar un nuevo producto
  const manejarAddProducto = () =>{
    if(nombreProducto.trim() !== ''){
      addProdcuto(nombreProducto);
      setNombreProducto('');
    }
  };

  return(
    <div>
      <input 
        type='text'
        placeholder='Nombre del producto'
        value={nombreProducto}
        onChange={manejarCambioEntrada}
        />
        <button onClick={manejarAddProducto}>Agregar Producto</button>
    </div>
  );
}

export default AddProducto;