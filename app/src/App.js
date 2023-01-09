import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Category } from './components/Category';


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Category></Category>
      <Home></Home>
        
    </div>
  );
}

export default App;
