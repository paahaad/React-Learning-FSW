import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function InputField() {

  const [text, setText] = useState("");
  const [item, setItem] = useState(["Parvat"]);
  // on every render
//   useEffect(()=>{
//     console.log("I rerender")
//   })
  //only for the first time i.e first render or fist mount
//   useEffect(()=>{
//     console.log("I mounted")
//   }, [])
  
  // on first render + only run when added dependence's value changes
//   useEffect(()=>{
//     console.log(`I changed ${item}`)
//   },[item])

  // when code unmount. i.e cleanup
  useEffect(()=>{
    console.log("attech data");

    // clean up function it run before mounting i.e before render and mount, not run on fist mount
    return () => {
        console.log("I detach")
    }
  })


  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>setItem([...item,text])}>Add</button>

        <div>
            {item.map((ele)=>(<div key={ele}>{ele}</div>))}
        </div>
    </div>
  )
}

export default InputField