import React, { useState } from 'react'
import TaskItem from './TaskItem';

function Tasks() {
  const [query, setQuery] = useState("")
  const [task, setTasks] = useState([]) 
  const handleChange =(e)=>{
      const {value} = e.target;
      setQuery(value);
  }
  const handleAdd = () => {
      const payload = {
          id: Date.now(),
          title : query,
          status : false
      }

      const newArr = [...task, payload]
      setTasks(newArr);
  }
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={query} onChange={handleChange} placeholder='Add New Task' />
        <button onClick={handleAdd}>Add</button>

        <div>
            {task.map(item => {
                // return <div>{item.title}</div>
                return <TaskItem {...item} />
            })}
        </div>
    </div>
  )
}

export default Tasks