import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = "counter-heading">Counter</h1>
	  <div className = 'counter-box'>
	    <label>
			Count: <input type = 'number' value ={count} onChange={e => setCount(Number(e.target.value))} />
		</label>
		<div className = 'button-holder'>
			<button className = 'add' onClick = {() => setCount(count + 1)}>Add</button>
			<button className = 'sub' onClick = {() => setCount(count - 1)}>Subtract</button>
			<button className = 'reset' onClick = {() => setCount(0)}>Reset</button>
		</div>
	  </div>
    </>
  )
}

export default App