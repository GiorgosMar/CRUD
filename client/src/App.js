import { Container } from "@material-ui/core";
import React,{ Fragment } from "react";
import './App.css';

//components

import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
  <Fragment>
    <Container fixed>
     <Input/>
     <List/>
   </Container>
  </Fragment>
  );
}

export default App;
