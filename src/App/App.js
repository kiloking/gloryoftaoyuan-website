import './App.css';

import Navbar from './Navbar';
import NavbarData from './Navbar.json'

function App() {
  const { navbar} = NavbarData
  return (
    <div className="App">
      <Navbar data={navbar}/>
    </div>
  );
}

export default App;
