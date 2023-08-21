import "./Details.css"
import { Outlet } from "react-router-dom";

function Details() {
    return ( 
        <>
        <h1>Launch details</h1>
        <div className="details">
            <p>some text here</p>
            <Outlet />
        </div>
        </>
     );
}

export default Details;