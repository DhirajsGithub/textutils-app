import './App.css';
import React from 'react';
// import Navbar1 from './Components/Navbar1';
import FormText from './Components/FormText';
import DarkLightNavbar from './Components/DarkLightNavbar';
import { useState } from 'react';
import Alert1 from './Components/Alert1';
import About from './About';
// importing react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light')     // whether dark mode is enabled or not
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#3f4246"
      showAlert("Dark mode enable", "success")
      document.title = "TextEditor-DarkMode"
      // setInterval(()=>{
      //   document.title = "TextEditor-is Amazing!!"
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "Install Text Util Now !!!"
      // }, 1500)
    }else{
      setMode('light')
      document.body.style.backgroundColor = "#e6e6e6"
      showAlert("light mode enable", "success")
      document.title = "TextEditor-LightMode"
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert ({
      msg : message, 
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }  

  return (
    <div className="App">
      <Router>
        {/* <Navbar1 title = "React" content = "tutorial" /> */}
      < DarkLightNavbar mode = {mode} toggleMode = {toggleMode} />
      < Alert1 alert = {alert}/>
      <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<FormText mode= {mode} toggleMode={toggleMode} showAlert = {showAlert } />} />
      </Routes>
      </Router>
     
    </div>

  );
}

export default App;
