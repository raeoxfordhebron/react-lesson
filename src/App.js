import Counter from "./components/Counter"
import InputDisplay from "./components/InputDisplay";
import PropTricks from "./components/PropTricks";

function App() {
  const tricksprops = {
    cheese: "gouda",
    bread: "rye",
    vegetable: "turnip",
    dessert: "bread pudding"
  }
  console.log("App Rendered")
return <>
  <Counter/>
  <InputDisplay/>
  <PropTricks
  {...tricksprops}/>
</>
  
}

export default App;
