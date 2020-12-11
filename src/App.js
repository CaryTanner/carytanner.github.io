import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import EmailPopover from "./Components/EmailPopover";
import ContactForm from './Components/ContactForm'
import { Container} from "@material-ui/core";

function App() {
  // email popover
  const [emailPopAnchor, setEmailPopAnnchor] = useState(null);

  const handleEmailPopover = (event) => {
    setEmailPopAnnchor(event.currentTarget);
  };
  const closeEmailPopover = () => {
    setEmailPopAnnchor(null);
  };
  const openPopover = Boolean(emailPopAnchor);

  //contact form dialog
  const [isContactFormOpen, setIsContactFormOpen]= useState(false)

  const openContactForm = () => {
    setIsContactFormOpen(true)
  }

  const closeContactForm = () => [
    setIsContactFormOpen(false)
  ]

  return (
    <>
      <Container maxWidth="xl" disableGutters="true">
        <Header openContactForm={openContactForm}/>

        <Landing emailOpen={handleEmailPopover} openContactForm={openContactForm}/>
        <About />
        <Projects />
        <Contact emailOpen={handleEmailPopover} openContactForm={openContactForm} />
        <EmailPopover
          openPopover={openPopover}
          closeEmailPopover={closeEmailPopover}
          emailPopAnchor={emailPopAnchor}
        />
        <ContactForm openContactForm={openContactForm} closeContactForm={closeContactForm} isContactFormOpen={isContactFormOpen} /> 
      </Container>
    </>
  );
}

export default App;
