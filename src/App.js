import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import AppCss from './App.css'


function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contacts/>
    </div>
  );
}

export default App;
