import React, { useState } from 'react'

function InputRead() {
    const [query, setQuery] = useState("");
    const [task, setTask] = useState([]);
    const handleChange = (e) => {
        // console.log(e.target.value)
        const { value } = e.target;
        // console.log(value)
        setQuery(value)
    }
    const handleAdd = () => {
        const payload = {
            id:Date.now(),
            title:query,
            staus:false
        }
        let newArr = [...task, payload];
        setTask(newArr);
        
    }
    console.log(task)
    return (
        <>
            <div>
                <h2>Read Input</h2>
                <input value={query} onChange={handleChange} placeholder='Add Something' />
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                {task.map((ele)=>{
                    return <div>{ele.title}</div>;
                })}
            </div>
        </>
    )
}

export default InputRead