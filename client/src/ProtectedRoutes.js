import { Navigate, Outlet } from "react-router-dom";
import React,{useState, useEffect } from "react";
import Login from "./components/Login";

const ProtectedRoutes = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthenticated = async () => {
        try {
          const res = await fetch("http://localhost:5000/authentication/verify", {
            method: "POST",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseRes = await res.json();
    
          parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        checkAuthenticated();
      }, []);
    
      const setAuth = boolean => {
        setIsAuthenticated(boolean);
      };

    return isAuthenticated ? <Outlet element={<Navigate to="/" />} /> : (<Navigate to="/login" />);
}

export default ProtectedRoutes;