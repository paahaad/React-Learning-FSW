import logo from './logo.svg';
import './App.css';

import Logo from './component/Logo';
import Button from './component/Button';
import Link from './component/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
          <Logo/>
          <Link/>
          <Button/>
        </div>
      </header>
    </div>
  );
}

export default App;
