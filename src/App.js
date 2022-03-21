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
          <div className="content">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard/" element={<Dashboard />} />
                <Route path="/home/" element={<Home/>} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;