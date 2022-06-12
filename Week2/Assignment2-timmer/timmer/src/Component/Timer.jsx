import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Timer() {
  const [time, setTime] = useState(0)
  const timeRef = useRef(null)
  const handleStart = () =>{
    // if timer is not running then start
    // else skip
    if(timeRef.current) return
    timeRef.current = setInterval(()=>{
        setTime(prev=>prev+1)
    },1000)
  }
  const handleStop =() => {
    // if timer is running then stop
    // else skip
    if(timeRef.current){
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
  };

  const handleReset = () => {
    // if timer is running then 
    // stop
    // rest the value to zero
    handleStop();
    setTime(0)
  }
  useEffect(() => (handleStop),[])
  return (
    <div>
        <h1>{time}</h1>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
        <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Timer