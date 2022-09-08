import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState} from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
 
  
  Route,
  
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#011736'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }}
    const toggleBlueMode=()=>{
      if(mode ==='light'){
        setmode('dark')
        document.body.style.backgroundColor='black'
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white'
      }
  }
  
  return (
    <>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode}/>
     <Alert alert={alert}/>
     <div className="container">
    <Routes>
      <Route path="/" element={ <TextForm  showalert={showalert} heading="enter the text to analyze"/>} />
      <Route path="/about" element={<About/> } />
      
    </Routes>
    </div>
  </Router>
     
    
  
    
     
    </>
  );
}

export default App;
