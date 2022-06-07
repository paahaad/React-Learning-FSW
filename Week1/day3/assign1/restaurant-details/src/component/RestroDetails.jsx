import React from 'react'
import style from './RestroDetails.Module.css'

function Button({buttonName}){
  return(
    <button className='button-box'>{buttonName}</button>
  )
}
function RestroDetails({Dates, logo, body, color}) {
  return (
    <div className='container' style={{backgroundColor:color}}>
      <section className='header'>
        <span>{Dates}</span>
        <img src={logo}/>
      </section>
      <Button buttonName={'CASE STUDY'}/>
      <h1 className='body'>{body}</h1>
      <div className='footer'>
        <p>Desktop-Mobile</p>
        <p>{'->'}</p>
      </div>
    </div>
  )
}

export default RestroDetails