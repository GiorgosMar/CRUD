/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Container } from "@material-ui/core";
import React,{ Fragment, useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import './App.css';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


//components
import Input from "./components/Input";
import List from "./components/List";
import Edit from "./components/Edit";
import Login from "./components/Login";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
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

  return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Router>
     <Fragment>
        <Container fixed>
          <Routes>
          <Route
              exact
              path="/login"
              render={() =>
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Outlet element={<Navigate to="/" />} />
                )
              }
            />
            <Route
              exact
              path="/"
              render={() =>
                isAuthenticated ? (
                  <Outlet element={<List />} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          {/*<Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<List />} />
            <Route path="/insert" element={<Input />} />
            <Route path="/:id/update" element={<Edit />} />
           </Route>*/}
          </Routes>
         </Container>
      </Fragment>
  </Router>
</LocalizationProvider>
);}


export default App;
