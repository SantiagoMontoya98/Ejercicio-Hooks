import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from './CounterCustomHook'

const Counter = () => {

  /* const [counter, setCounter] = useState(0);

  const handleSumar = () => setCounter(counter + 1);

  const handleRestar = () => setCounter(counter - 1);

  const handleReset = () => setCounter(0); */

  const {counter, handleSumar, handleReset, handleRestar} = useCounter();

  /* const mostrarDatos = (...datos) => {

    console.log(datos);

  }

  mostrarDatos('1','Santiago','8','Luis');

  const array = ['1','Santiago',8,'Luis'];

  mostrarDatos(...array);
 */
 

  return (

    <div>

      <h1>Contador: {counter}</h1>

      <Button variant="primary" onClick={/* handleSumar */ handleSumar}>Sumar</Button>
      <Button variant="warning" onClick={/* handleReset */ handleReset}>Reset</Button>
      <Button variant="primary" onClick={/* handleRestar */ handleRestar}>Restar</Button>
      
    </div>

  )
}

export default Counter
