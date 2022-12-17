import {useState} from "react"

function Counter (props) {
  // let count = 0
  const [count, setCount] = useState(0) // useState is just a function - a hook, use creates the state, set allows us to update the state
  console.log(count)
  function countUp(){
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={countUp}>Add One</button>
    </div>
    )
}

export default Counter
