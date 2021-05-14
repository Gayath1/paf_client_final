import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Add from './Component/Add research';
import Delete from './Component/Delete';
import Update from './Component/Update';



function App() {

  return (
      <BrowserRouter forceRefresh={true}>

          <Switch>

            <Route  path="/addresearch" component={Add} />
              <Route  path="/deleteresearch" component={Delete} />
              <Route  path="/updateresearch" component={Update} />


          </Switch>

      </BrowserRouter>
  );
}

export default App;