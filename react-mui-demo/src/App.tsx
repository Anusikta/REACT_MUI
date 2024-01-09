import './App.css';
import { useState } from 'react';
// import { MuiButton } from './Components/MuiButton';
// import { MuiSelect } from './Components/MuiSelect';
// import { MuiTextField } from './Components/MuiTextField';
// import { MuiTypo } from './Components/MuiTypo';
// import { MuiRadio } from './Components/MuiRadio';
// import { MuiCheck } from './Components/MuiCheck';
import { PasswordInput } from './Components/PasswordInput';
import { FieldInput } from './Components/FieldInput';
import { Navbar } from './Components/Navbar';

function App() {
  const [fieldInput, setFieldInput] = useState("");
  const [password, setPassword] = useState("");
  const navItems = [
    {
      title: 'Home',
      href : '/'
    },
    {
      title: 'Login',
      href : '/'
    }
  ]
  return (
    <div className="App">
      {/* <MuiTypo />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadio />
      <MuiCheck /> */}

      <Navbar logo='react-mui-demo\public\logo512.png' navItems={navItems}/>

      <FieldInput type="text" label="Input field" value ={fieldInput} placeholder="Enter the input" 
        onChange={setFieldInput} validate={/^[\w\.]{4,}@[a-zA-Z\.]{5,}\.[a-zA-Z]{2,}/}/>
        
      <PasswordInput type="password" label="Enter Password" value={password}
        placeholder="Enter a strong password" onChange={setPassword}
        validate={/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/}
      />

    </div>
  );
}

export default App;
