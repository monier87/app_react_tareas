import React, { useState } from 'react';
import '../hoja-de-estilos/TareaFormulario.css'

function TareaFormulario(props) {


  const [input, setInput] = useState('');

 
 
  const manajerCambio = e => {
    console.log('Escribiendo....')
  }

  const manejarEnvio = e => {
    const tareaNueva = {
      id: '34545',
      texto : 'Hola'
    }
  }



  return (
    <form>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escriba una Tarea'
        name='texto'
        onChange={manajerCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;