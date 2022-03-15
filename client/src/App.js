import { Container } from "@material-ui/core";
import React,{ Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//components
import Input from "./components/Input";
import List from "./components/List";
import Edit from "./components/Edit";

function App() {
  return (
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
);}


export default App;
