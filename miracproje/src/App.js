import { Form } from "./Form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Anasayfa } from "./Anasayfa";
import { SiparisSuccess } from "./SiparisSuccess";
const App = () => {

  const[siparisler,setSiparisler]=useState([])  ;
 

  return (
   
    <BrowserRouter>
     <Switch>
     <Route exact path="/">

      <Anasayfa   />
      </Route>
      <Route exact path="/success">

<SiparisSuccess   />
</Route>
      <Route exact path="/pizza">
      <Form siparisler={siparisler} setSiparisler={setSiparisler} />
      </Route>
   </Switch>
   </BrowserRouter>
  );
};
export default App;
