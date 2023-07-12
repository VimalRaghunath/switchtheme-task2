import React, {useState} from 'react';
import './App.css';

function App() {
  const[darkmode,setDarkmode]=useState(false);
  const themeSwitch=()=>{
    setDarkmode(!darkmode);
  }
  return (
    <div className={`app ${darkmode?'dark':'light'}`}>
      <button onClick={themeSwitch} className='btn'>Switch theme</button>

    </div>
  )
}

export default App



