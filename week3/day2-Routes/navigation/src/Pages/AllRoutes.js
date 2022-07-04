import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About";
import Users from "./Users";
import User from "./User";

function AllRoutes() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}> </Route>
                <Route path="/user" element={<Users/>}> </Route>
                <Route path="/user/:id" element={<User/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;