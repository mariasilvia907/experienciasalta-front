import React from 'react';
//import LoginScreen from '../components/Auth/LoginScreen';
import HomeExpeSalta from '../components/Home/HomeExpeSalta';
import Nosotros from '../components/Nosotros/Nosotros';
import Experiencias from '../components/Experiencias/Experiencias';

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Contacto from '../components/Contacto/contacto';
  
  const AppRouter = () => {
    return (
          <>
          <Router>
              <div>
                      <Switch>
                      <Route exact path="/">
                          <HomeExpeSalta />
                      </Route>
                      
                      <Route exact path="/nosotros">
                          <Nosotros />
                      </Route>

                      <Route exact path="/experiencias">
                          <Experiencias />
                      </Route>

                      <Route exact path="/contacto">
                          <Contacto />
                      </Route>
                      </Switch>
  
              </div>
          </Router>

        </>
  )
};

export default AppRouter;
