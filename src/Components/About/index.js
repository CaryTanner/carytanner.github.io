import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  useScrollTrigger,
  Fade,
  useMediaQuery
} from "@material-ui/core";
import headShot from "../../images/headShot.jpg";
import headShotShort from "../../images/headShotShort.png";

export default function About() {
  const textRef = React.createRef();
  const [scrollTrigger, setScrollTrigger] = React.useState(undefined);
  const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));

  let options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollTrigger(true);
        }
      },

      options
    );

    if (textRef) {
      scrollObserver.observe(textRef.current);
    }
  }, []);

  return (
    <>
      <Grid
        style={{ padding: "0 2rem 0 2rem" }}
        container
        className={styles.aboutContainer}
      >
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems={isXs ? "center" : "flex-end"}
        >
          <Grid
            item
            sm={6}
            className={styles.landingTextBox}
            container
            direction="column"
            
          >
              <Fade in={scrollTrigger} timeout={1000}>
            <Typography ref={textRef} variant="h4">
              <Box mb={4} align={isXs ? "center" : "left"}>About Me</Box>
              
            </Typography>
          </Fade>
          <Fade in={scrollTrigger} timeout={1000}>
            <Typography variant="body1">
             <Box fontFamily="Roboto Slab" align="justify" >I am the best at all the code machineI am the best at all the code machineI am the best at all the code machineI am the best at all the code machineI am the best at all the code machineI am the best at all the code machine.
             </Box> 
            </Typography>
          </Fade>
            
          </Grid>
        </Grid>
        <Grid item sm={6} container direction="column" justify="space-around" alignItems="center">
            <Fade in={scrollTrigger} timeout={1000}>
              <img src={headShotShort} className={styles.headShot} alt="Cary Tanner"></img>
            </Fade>
        </Grid>
      </Grid>
    </>
  );
}
