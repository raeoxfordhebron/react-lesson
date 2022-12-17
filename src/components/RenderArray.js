import Card from "./Card"

function RenderArray(props){
    return (<>
    {props.data.map((item, index) => 
        <Card item={item} index={index}/>
        
    )}
    </>)
}

export default RenderArray