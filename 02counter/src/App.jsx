import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter = 10

  const addValue = () => {
    // if (counter < 25) {
    //   setCounter(counter + 1)
    // }
    // else {
    //   console.log("You reach extreme value.")
    // }
    setCounter(prevCounter => prevCounter + 1); //take latest value of counter and add 1 to it. This is the best way to update state when it depends on previous state.
    // setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if (counter > 0) {
      // setCounter(counter - 1)
      setCounter(prevCounter => prevCounter - 1);
    }
    else{
      console.log("You reach lowest value.")
    }
  }

  return (
    <>
      <h1>Meow aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}
export default App
