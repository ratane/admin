import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
     <Topbar/>
     <div className="container">

      <Sidebar/>
      {/* <div className='others'> */}
    
    <Home/>
      {/* </div> */}
     </div>
    </div>
  );
}

export default App;
