
import './App.css';
import Home from './Components/HomePage/Home';
import Loginpage from './Components/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
        {
          
        (localStorage.getItem('users')==undefined || localStorage.getItem('users')==null) ? 
        <Loginpage /> :  <Home />
        
        }
    </div>
  );
}

export default App;
