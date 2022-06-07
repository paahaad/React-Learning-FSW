import './App.css';
import RestroDetails from './component/RestroDetails';
import logo from './Amazon-Logo-Transparent-PNG.png';

function App() {
  return (
    <div className="App">
      <RestroDetails  
        Dates={'12/12/2022'} 
        logo={logo} 
        body={ 'Amzaon Gift Pay' } 
        color={'#ffa500'}
      />

      <RestroDetails  
        Dates={'12 sep 2020'} 
        logo={logo} 
        body={ 'Apple Gift Payment' } 
        color={'#f5f5f5'}
      />
      
    </div>
  );
}

export default App;
