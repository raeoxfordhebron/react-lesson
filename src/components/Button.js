function Button(props){
    console.log("Button " + props.label)
    return <button onClick={props.click} style={{ // outer curly braces say this is javascript, css is an object
        border: "none",
        padding: "6px", // cannot do media queries like this, nor can we do hover
        fontSize: "1.2em",
        backgroundColor: props.bg,
        color: "white",
        margin: "3px"
    }}>
        {props.label}
        </button>
}

export default Button