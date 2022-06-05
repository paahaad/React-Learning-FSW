import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios form 'axios'

function App() {
  const [todo, setTodo] = React.useState([])
  useEffact(()=>{
    const getTodo = async() =>{
      let data = await axios.get("url");
    };
  }, [])
}

export default App;
