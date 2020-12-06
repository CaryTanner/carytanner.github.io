import React, { useEffect, useState }from 'react'
import './App.css';
import Header  from './Components/Header'
import Landing from './Components/Landing'
import Projects from './Components/Projects'
import About from './Components/About'
import {Container} from '@material-ui/core'


 
function App() {
 

  return (
    <>
    <Container maxWidth="xl" disableGutters="true">
     <Header />
     
    <Landing />
    <About />
    <Projects />
    </Container>
      
      
    </>
  );
}

export default App;
