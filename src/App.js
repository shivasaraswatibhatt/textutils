import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
   const [alert, setAlert] = useState(null);

   const showAlert = (massage,type)=>{
     setAlert({
       msg: massage,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);

   }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ( 'dark')
      document.body.style.backgroundColor = '#468119';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils = Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils = light Mode';
    }
  }
  return (
  
    <>
    {/* <Navbar title ="Textutils" aboutText="About Textutils"/>*/}
    { /*<Navbar/>*/}
    <Router> 
    <Navbar title ="Textutils" mode={mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className ="container my-3">  
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route  exact path="/">
          <Textform showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
          </Route>
        </Switch>
      
 </div>
 </Router>
    
  </>
  );
}

export default App;
