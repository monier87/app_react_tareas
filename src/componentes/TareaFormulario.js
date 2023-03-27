import React from 'react';
import '../hoja-de-estilos/TareaFormulario.css'

function TareaFormulario(props) {
  return (
    <form>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escriba una Tarea'
        name='texto'
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;