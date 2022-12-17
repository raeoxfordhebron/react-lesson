function App() {
  let count = 0

  function countUp(){
    count += 1
    console.log(count)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={countUp}>Add One</button>
    </div>
  );
}

export default App;
