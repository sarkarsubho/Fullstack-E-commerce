
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Category } from './components/Category';
import { Productview } from './pages/userView/Productview';


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Category></Category>
      <Home></Home>
      <Productview></Productview>
        
    </div>
  );
}

export default App;
