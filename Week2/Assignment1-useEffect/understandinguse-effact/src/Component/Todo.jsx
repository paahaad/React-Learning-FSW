import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Todo() {
  const itemAPI = "http://localhost:3004/task/"
  const [text, setText] = useState("")
  const [item, setItem] = useState([])

  useEffect(()=>{
    // fatch data from url
    axios.get(itemAPI)
        .then(res=>{
            console.log(res)
            setItem(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
  },[])
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="ENTER TASK" />
        <button onClick={()=>setItem([...item,text])}>ADD</button>

        <div>
            {item.map(ele=>(<div key={ele}>{ele}</div>))}
        </div>
    </div>
  )
}

export default Todo