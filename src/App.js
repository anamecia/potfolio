import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import './App.css'


function App() {
  return (
    <div className='app-container'> 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
