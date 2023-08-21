import '../App.css'
import FlightList from '../components/FlightList';
import { Outlet, Link } from "react-router-dom";


function App() {
  
  return (
    <div>
      <h1>SpaceX Flights List</h1>
      <FlightList/>
    </div>
  );
}

export default App