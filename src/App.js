import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <div>
          <nav className="header navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <NavLink exact className={({isActive}) => (isActive ? "active navbar-brand" : 'navbar-brand')} to="/">Home</NavLink>
              <NavLink className={({isActive}) => (isActive ? "active navbar-brand" : 'navbar-brand')} to="/login">Login<small>(Access without token only)</small></NavLink>
              <NavLink className={({isActive}) => (isActive ? "active navbar-brand" : 'navbar-brand')} to="/dashboard">Dashboard<small>(Access without token only)</small></NavLink>
            </div>
          </nav>
          <div className="content container-fluid">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;