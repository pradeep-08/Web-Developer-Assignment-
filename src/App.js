import Dashboard from './Components/asset/dashboard';
import Mainboard from './Components/asset/mainboard';
import './App.css';

function App() {
  return <>
        <div className="master-div">
        <div className="dashboard">
        <Dashboard />
      </div>
      <div className="mainboard">
        <Mainboard />
      </div>
        </div>
      
  </>;
}

export default App;
