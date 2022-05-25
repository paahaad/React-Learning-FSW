import React from 'react'

export default function Task(arr) {
  return (
    <>
        {arr.map((item)=>{
            return <div>{item}</div>
        })}
    </>
  )
}
