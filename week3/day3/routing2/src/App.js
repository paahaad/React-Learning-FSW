import Navbar from './component/Navbar';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' >Homes</Route>
        <Route path='/feed' ></Route>
        <Route path='/login'></Route>
      </Routes>

    </div>
  );
}

export default App;
