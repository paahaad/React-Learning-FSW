import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import AllRouter from "./Router/AllRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />
    </div>
  );
}

export default App;
