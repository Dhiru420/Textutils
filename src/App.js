
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
const [alert, setAlert]= useState(null);
const showAlert=(message,type)=>{
  setAlert({
      msg: message, 
      type: type
  })
}
setTimeout(() => {
  setAlert(null)
}, 3000);
  const toggleMode=()=>{
    if(mode=== 'dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","Succes");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled","Succes");
    }
  }

  return (
    <>

    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    {<Alert alert={alert}/>}
    <div className="container my-3">
      <Routes>
        <Route path="*" element={<TextForm showAlert={showAlert} title="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/home" element={ <TextForm showAlert={showAlert} title="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>} />
        
      </Routes>
      </div>
    </BrowserRouter>
      
    </>
  );
}

export default App;
