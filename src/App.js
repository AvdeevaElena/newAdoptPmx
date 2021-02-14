import React, { Component } from 'react';
import MenuBar from './Components/MenuBar';
import Kartochka from './Components/Kartochka';
import Iphone from './Components/Iphone';

import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div style ={{backgraund:"green", marginTop:10, width: "100%",  height: "100%", display:"flex"}}>
            <MenuBar/>
            <Switch>
                        <Route path="/iphone" component={Iphone} />
                        <Route path="/Kartochka" component={Kartochka} />
             </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;