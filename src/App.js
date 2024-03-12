import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled!", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }



  return (
    <>
      <Navbar title="TextEditor" aboutInfo="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <About /> */}

      <div className="container">
        <Form heading="Enter the text here" mode={mode} showalert={showalert} />
      </div >


    </>
  );
}

export default App;
