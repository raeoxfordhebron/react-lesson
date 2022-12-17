import Card from "./Card"

function RenderArray(props){
    return (<>
    <div className="card-container">
    {props.data.map((item, index) => 
        <Card item={item} index={index}/>
        
    )}
    </div>
    </>)
}

export default RenderArray