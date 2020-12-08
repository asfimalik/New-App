import React, { useState }from 'react';
import './Room.css'

function Room(){
    let [isLit , setLit] = useState(false)
    
    const updateButn = ()=> {
    console.log("Clicked")
    setLit(!isLit);
    }
    let [age , setAge] = useState(23)
    const updateAge = function (){
        console.log("Clicked")
        setAge(++age);        
    }


    return <div className = "room" >
                The Room is  : {isLit ? 'Light' : 'Dark'} 
    <br/>
    
            Your Age is {age}
    
    <br/>
    
    <button onClick = {updateButn} >Change Room color</button>
    
    <br/>
    
    <button onClick = {updateAge} >Change Age</button>

</div>
}

export default Room