import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CategoriasLista from './CategoriasLista';
import CategoriasSearch from './CategoriasSearch';

const CategoriasApp = () => {

  const [categorias, setCategorias] = useState(['Horror']);

  const handleAgregar = () => setCategorias([...categorias,'Risas']);

  return (

    <div>

      <h1>Ejercicio con Hooks</h1>

      <ol>

        <CategoriasSearch setCategorias={setCategorias} />

        <CategoriasLista categoria={categorias} />

      </ol>

      <Button variant="primary" onClick={handleAgregar}>Agregar</Button>
      
    </div>

  )
}

export default CategoriasApp
