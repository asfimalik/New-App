import React,{useState} from 'react';
import Child  from "./Child";
import Counter from "./PropsName";

function Parent(){

    let Click = useState(0)
    return(
        <Counter.Provider value = {Click}>
            <div>
                <Child/>
            </div>
        </Counter.Provider>

)
}
export default Parent;