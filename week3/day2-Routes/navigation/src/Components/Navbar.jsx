import React from 'react';
import {NavLink, Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:"center", backgroundColor:"silver"}}>
 
    <h2>LOGO</h2>
    <div>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/user'>User</Link> 
    </div>
</div>
  )
}

export default Navbar