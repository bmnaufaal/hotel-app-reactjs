import React from 'react';
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <div>
            <nav className="header navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <NavLink exact className={({isActive}) => (isActive ? "active navbar-brand" : 'navbar-brand')} to="/home/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active navbar-brand" : 'navbar-brand')} to="/dashboard/">Dashboard</NavLink>
                </div>
            </nav>
            <div className="m-3">
                Welcome to the Home Page!
            </div>
        </div>

    )
}

export default Home