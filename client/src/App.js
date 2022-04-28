import { Container } from "@material-ui/core";
import React,{ Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

//components
import Input from "./components/Input";
import List from "./components/List";
import Edit from "./components/Edit";

function App() {
  return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Router>
     <Fragment>
        <Container fixed>
          <Routes>
          <Route index path='/' element={<List/>}/>
          <Route path='/insert' element={<Input/>}/>
          <Route path='/:id/update' element={<Edit/>}/>
          </Routes>
         </Container>
      </Fragment>
  </Router>
</LocalizationProvider>
);}


export default App;
