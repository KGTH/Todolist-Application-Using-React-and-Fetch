import React, {useState}from "react";


const Imput =(props)=>{
    const [mouse, setMouse]= useState(false);

    const mouseOut =()=>{
		setMouse(false)

	}

	const mouseOver =()=>{
			setMouse(true)
	}

return (
< div className="input-value"  onMouseOut={mouseOut} onMouseOver={mouseOver}>
					{props.name}<button type="button" className={mouse ? "" : "d-none"} onClick={()=>{props.Delete(props.name)}}>X</button>
					</div >

)
}
export default Imput ;