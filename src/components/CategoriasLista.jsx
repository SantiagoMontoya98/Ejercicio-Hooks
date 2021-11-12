import React from 'react'
import Cards from './Cards';

const CategoriasLista = ({categoria}) => {
  return (
    <div>
      <h1>Lista de Categorias</h1>
      {

        categoria.map((el, index) => {

          return (

            <Cards key={index} categoria={el}/>

          );

        })

      }

    </div>
  )
}

export default CategoriasLista
