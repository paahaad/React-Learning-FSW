import React from "react";

const Counter =()=>{
    const [count, setCount] = React.useState(0)
    return(
        <section>
            <h2>Counter</h2>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>dec</button>
            <button onClick={()=>setCount(count*2)}>duble</button>
        </section>
    );
}
export default Counter;