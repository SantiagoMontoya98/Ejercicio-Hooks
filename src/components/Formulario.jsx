import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {

  const [data, setData] = useState({

    nombre: '',
    email: ''

  });

  const handleOnChange = ({target}) => {

    setData({
      ...data,
      [target.name]: target.value      
    })

  }

  useEffect(() => {

    console.log("ComponentDidMount");

    return () => {
      console.log("ComponenteWillUmount");
    }
    
  }, [data])

  /* useEffect(() => {

    console.log("ComponentDidUpdate");
    
  }, [data]) */


  return (

    <div>

      <h1>Formulario</h1>

      <Form>

        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" name="email" placeholder="Ingresa el email" 
            value={data.email} onChange={handleOnChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Ingresa el nombre" 
           value={data.nombre} onChange={handleOnChange} />
        </Form.Group>

        <Button variant="primary" >Enviar</Button>

      </Form>
      
    </div>

  )
}

export default Formulario
