import "./FlightList.css";
import { useEffect, useState } from "react";
import axios from "axios";

function FlightList() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v2/launches")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul className="card-grid">
      {flights.map((flight) => (
        <li key={flight.flight_number} className="card">
          <div className="card-header">
          <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
            <h2>{flight.mission_name}</h2>
            </div>
          <div className="card-body">
            <p>Flight number: {flight.flight_number}</p>
          <p>Launch year: {flight.launch_year}</p>
          <p>Launch date: {flight.launch_date_local}</p>
          <p>Site: {flight.launch_site.site_name_long}</p>
          {/* <p>Details: {flight.details}</p> */}
          <p>Crew: {flight.crew}</p>
          </div>
          <div className="card-footer">
            <button className="btn">Details</button>
            <button className="btn btn-outline">More...</button>
          </div>
          
        </li>
      ))}
    </ul>
  );
}

export default FlightList;