import React, {useContext} from 'react'
import Counter from './PropsName';

function Child (props){

let counterValue = useContext(Counter)
console.log(counterValue)
return (

    <div>
    
    <h4>    The counter value is : {counterValue[0]}  </h4>
    <button onClick= { ()=> {counterValue[1](++counterValue[0])}} >
    Increase 
    </button>
    
    </div>
)

}
export default Child;