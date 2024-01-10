import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { MuiButton } from './Components/MuiButton';
// import { MuiSelect } from './Components/MuiSelect';
// import { MuiTextField } from './Components/MuiTextField';
// import { MuiTypo } from './Components/MuiTypo';
// import { MuiRadio } from './Components/MuiRadio';
// import { MuiCheck } from './Components/MuiCheck';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './About';
import { Signup } from './Components/Signup';

function App() {
  
  const navItems = [
    {
      title: 'Home',
      href: '/home',
      component: Home
    },
    {
      title: 'About',
      href: '/about',
      component: About
    },
    {
      title: 'SignUp',
      href: '/signup',
      component: Signup
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

      {/* <Routes>
        <Route path='home' element={<Home />} ></Route>
        <Route path='about' element={<About />} ></Route>
      </Routes> */}

      <Navbar logo={logo} navItems={navItems} />

      <Routes>
        {navItems.map((item, index) => (
          <Route key={index} path={item.href} element={<item.component />} />
        ))}
      </Routes>

    </div>
  );
}

export default App;
