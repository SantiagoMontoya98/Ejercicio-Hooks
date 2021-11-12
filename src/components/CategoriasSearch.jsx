import React, { useEffect, useRef, useState } from 'react'

const CategoriasSearch = ({setCategorias}) => {

  const [search, setSearch] = useState('');

  const searchRef = useRef();

  const handleSubmit = e => {

    e.preventDefault();

    setCategorias(categorias => [search, ...categorias]);

    setSearch('');


  }

  useEffect(() => {

    searchRef.current.focus();
    
  }, [])
  

  const handleInputChange = e => setSearch(e.target.value);

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <input
          ref={searchRef}
          type="text" 
          name="search" 
          placeholder="Ingresa la categoria"
          value={search}
          onChange={handleInputChange}/>

      </form>
      
    </div>

  )
}

export default CategoriasSearch
