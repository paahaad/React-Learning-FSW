import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
   
      
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
