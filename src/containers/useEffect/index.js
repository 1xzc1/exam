import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title=`clicked ${counter} times`
    },[counter]);
    
    return (
        <div>
            <h1>
                UseEffect hook 
            </h1>
            <h2>Counter: {counter}</h2>
            <button onClick={()=>setCounter(counter +1)}>increment couter</button>

        </div>
    )
}

export default UseEffect;