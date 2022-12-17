function Display(props){
    console.log("Display Rendered: " + props.displayValue)
    return <h1>{props.displayValue}</h1>
}

export default Display