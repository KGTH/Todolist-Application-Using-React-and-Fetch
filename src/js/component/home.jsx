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
		  setValue([...value, {label: inputValue, done: false}])
		  setinputValue("");
		  const options = {
			method: 'PUT',
			body: JSON.stringify([...value, {label: inputValue, done: false}]),
			headers: {
			  "Content-Type": "application/json"
		} }
		
		fetch('https://assets.breatheco.de/apis/fake/todos/user/kgth-1',options )
		.then((response)=>{
			return response.json()
		})


		    }}
 

	 useEffect (()=>{
		
		fetch('https://assets.breatheco.de/apis/fake/todos/user/kgth-1' )
		.then((response)=>{
			return response.json()
		}).then((response)=>{
			setValue(response)
		})
},[]) 
	 
const bottonDelete =(e)=>{
	const filtered = value.filter(item =>item.label != e)
	setValue(filtered)
	const options = {
	 method: 'PUT',
			body: JSON.stringify(filtered),
			headers: {
			  "Content-Type": "application/json"
		} }
	
	fetch('https://assets.breatheco.de/apis/fake/todos/user/kgth-1',options )
	.then((response)=>{
		return response.json()
	})

	

}

	return (
		<div className="container ">
						<input type="text" onChange={change} onKeyDown={keyDown} value={inputValue}  placeholder="write something..... "/>
					{
					value.map((value, index)=>{
							return <Imput key={index}  name={value.label}  Delete={bottonDelete}	
							/>		
					})}
					<div ><strong>El numero de tareas es: {value.length}</strong></div>
						</div>

	);
};

export default Home;
