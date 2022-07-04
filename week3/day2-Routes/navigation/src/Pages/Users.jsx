import React from 'react'
import {Link} from 'react-router-dom'

function Users() {
 const styleOuterDiv = {
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    gap:"10px"

 }
 const styleinnerDiv = {
    margin: "10px",
    border:"1px solid black"
 }
  const userData = [
    {id:1, name:"Parvat"},
    {id:2, name:"Prithvi"},
    {id:3, name:"Shikhar"},
    {id:4, name:"Rahul"},
    {id:5, name:"Sachin"}
]
  return (
    <div style={ styleOuterDiv }>
        {userData.map((ele)=>{
            return (
                <div style={styleinnerDiv}>
                    <p>Id:{ele.id}</p>
                    <p>Name:{ele.name}</p>
                    <p><Link to={`/user/${ele.id}`}>See More </Link></p>
                </div>
            )
            
        })}
    </div>
  )
}

export default Users