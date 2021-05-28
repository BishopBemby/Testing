import React, {useState} from 'react'

const Greeting = () => {

    const [textChange, setTextChange] = useState();

    const changeText = (event)=>{
        setTextChange(true);
    }

    return (
        <div>
           <h2>Hello World</h2> 
           {!textChange && <p>How are you?</p>}
           {textChange && <p>Is your family ok?</p>}
           <button onClick={changeText}>Change Text</button>
        </div>
    )
}

export default Greeting;
