import React from "react";
import {Link} from "react-router-dom"

export default function() {
  return (
    <div className="links-wrapper">
        <div className="links">
            <Link exact="true" to="/">
                **** Home Page ****
            </Link>
        </div>
        <div className="links">
            <Link to="/add-sub">Add/Sub</Link>
        </div>
        <div className="links">
            <Link to="/toggle-me">Toggle Me</Link>
        </div>
        <div className="links">
            <Link to="/hide-me">Hide Me</Link>
        </div>
        <div className="links"> 
            <Link to="/grow-shrink">Grow/Shrink</Link>
        </div>
        <div className="links">
            <Link to="/push-around">Push/Around</Link>
        </div>
        <div className="links">
            <Link to="/current-time">Current Time</Link>
        </div>
        <div className="links">
            <Link to="/color-word">Color/Word</Link>
        </div>
    </div>
  );
}