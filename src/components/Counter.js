import {useState} from "react"
import Button from "./Button"
import Display from "./Display"

function Counter (props) {
  // let count = 0
  const [count, setCount] = useState(0) // useState is just a function - a hook, use creates the state, set allows us to update the state
  console.log(count)
  function countUp(){
    setCount(count + 1)
  }

  function countDown(){
    setCount(count - 1)
  }

  return (
    <div className="App">
      <Display displayValue={count}/>
      <Button label="+1" click={countUp}/>
      <Button label="-1" click={countDown}/>
    </div>
    )
}

export default Counter
