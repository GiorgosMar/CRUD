/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { Container } from "@material-ui/core";
import React,{ Fragment, useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


//components
import Input from "./components/Input";
import List from "./components/List";
import Edit from "./components/Edit";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(`/authentication/verify`,{
        method: "POST",
        headers: { jwt_Token: localStorage.Token },
      });

      const parseRes = await res.json();

      res.status === 200 ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);
  

  return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Router>
     <Fragment>
        <Container fixed>
          <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/"/>} />
          <Route path="/" element={isAuthenticated ? <List setAuth={setAuth}/> : <Navigate to="/login"/>} />
          <Route path="/insert" element={isAuthenticated ? <Input/> : <Navigate to="/login"/> }/>
          <Route path="/:id/update" element={isAuthenticated ? <Edit/> : <Navigate to="/login"/>} />
          </Routes>
         </Container>
      </Fragment>
  </Router>
</LocalizationProvider>
);}


export default App;
