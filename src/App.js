import Counter from "./components/Counter"
import InputDisplay from "./components/InputDisplay";
import PropTricks from "./components/PropTricks";
import data from "./data"
import RenderArray from "./components/RenderArray";
import Card from "./components/Card";

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
  <RenderArray data={data}/>
</>
  
}

export default App;
