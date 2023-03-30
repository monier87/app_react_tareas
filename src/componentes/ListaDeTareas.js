import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './tarea';
import '../hoja-de-estilos/ListaDeTareas.css'

function ListaDeTareas() {
  
  const [tareas, setTareas]= useState([]);

  const agregarTarea= tarea => {
    console.log(tarea);
    /*Probar si la cadena no esta vacia */
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const TareasActualizadas = [tarea, ...tareas];
      setTareas(TareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const TareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(TareasActualizadas);
  }

  const completarTarea = id => {
    const TareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(TareasActualizadas);
  }

  
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}/>
          )
        }
      </div>
    </>
 );
}

export default ListaDeTareas;