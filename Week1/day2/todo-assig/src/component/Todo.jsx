import React, {useState} from 'react'
import Task from './Task'

function Todo() {
  const [query, setQuery] = useState("")
  const [task, setTask] = useState([])
  console.log(task)
  return (
    <div>
      <h2>Todo</h2>
      <input type="text" onChange={(e) => {setQuery(e.target.value)} } />
      <button onClick={() => {setTask([...task,query])}}>Add</button>

      <div>
        {task.map((item)=>{
            return <div>{item}</div>
        })}
      </div>
    </div>
  )
}

export default Todo;