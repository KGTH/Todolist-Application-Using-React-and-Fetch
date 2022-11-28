import React, { useEffect, useState } from "react";
import Imput from "./imput";
//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setinputValue] = useState("");
	const [value, setValue]= useState([]);
	
	const change =(event)=>{
		setinputValue(event.target.value)
	};

	
	const keyDown  =(event)=>{
		if (event.keyCode == "13" && inputValue){
		  setValue([...value, inputValue])
		  setinputValue("");
		 
	 } }
 
	 useEffect (()=>{
		/*const options = {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
			  "Content-Type": "application/json"
		} }*/
		
		fetch('https://assets.breatheco.de/apis/fake/todos/user/kgthcruz-10' )
		.then((response)=>{
			return response.json()
		}).then((response)=>{
			setinputValue(response)
		})
},[]) 




	return (
		<div className="container text-center">
						<input type="text" onChange={change} onKeyDown={keyDown} value={inputValue}  placeholder="write something..... "/>
					{
					value.map((value, index)=>{
							return <Imput key={index} name={value}/>		
					})}
						</div>

	);
};

export default Home;
