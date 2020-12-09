import React, { useEffect, useState }from 'react'
import './App.css';
import Header  from './Components/Header'
import Landing from './Components/Landing'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import {Container} from '@material-ui/core'


 
function App() {
 

  return (
    <>
    <Container maxWidth="xl" disableGutters="true">
     <Header />
     
    <Landing />
    <About />
    <Projects />
    <Contact />
    </Container>
      
      
    </>
  );
}

export default App;
