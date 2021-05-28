import React, {useState} from 'react'
import Output from './Output';

const Greeting = () => {

    const [textChange, setTextChange] = useState();

    const changeText = (event)=>{
        setTextChange(true);
    }

    return (
        <div>
           <h2>Hello World</h2> 
           {!textChange && <Output>How are you?</Output>}
           {textChange && <Output>Is your family ok?</Output>}
           <button onClick={changeText}>Change Text</button>
        </div>
    )
}

export default Greeting;
