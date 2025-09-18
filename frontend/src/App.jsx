import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = "counter-heading">Counter</h1>
	  <div className = 'counter'> Count: {count} </div>
	  <div className = 'button-holder'>
		<button className = 'plus' onClick = {() => setCount(count + 1)}>+</button>
		<button className = 'minus' onClick = {() => setCount(count - 1)}>-</button>
	  </div>
    </>
  )
}

export default App