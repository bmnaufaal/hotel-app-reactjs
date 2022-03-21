import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getToken } from './Common';
 
const PrivateRoute = () => {
  return (
         getToken() ? <Outlet /> : <Navigate to="/login" />
  )
}
 
export default PrivateRoute;