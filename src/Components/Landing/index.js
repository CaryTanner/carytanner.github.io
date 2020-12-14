import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Hidden,
  Button,
  useMediaQuery,
  useScrollTrigger,
  Fade,
  Link
} from "@material-ui/core";
import { sendEmail } from '../../sendEmail'


export default function Landing({emailOpen, openContactForm}) {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    return setFadeIn(true);
  }, []);



  return (
    <>
      <Grid
        container
        className={styles.container}
        id="startSection"
      >
        <Grid
          item
          sm={6}
          xs={12}
          className={styles.photoSide}
          container
          direction="column"
          alignItems={isXs ? "center" : "flex-end"}
        >
          <Grid item className={styles.landingTextBox}  direction="column"  container xs={12} sm={9} md={8} >
            <Fade in={fadeIn} timeout={1000}>
              <Typography variant="h3">
                <Box
                  fontWeight="fontWeightMedium"
                  lineHeight={0.8}
                  letterSpacing={-1}
                  mt="220px"
                >
                  Hi, I'm Cary
                </Box>
              </Typography>
            </Fade>
            <Fade
              in={fadeIn}
              timeout={1000}
              style={{ transitionDelay: fadeIn ? "900ms" : "0ms" }}
            >
              <Typography variant="h4">
                <Box
                  fontWeight="fontWeightLight"
                  letterSpacing={-2}
                  my={{ xs: "3rem", sm: "3vw" }}
                  mr={2}
                  lineHeight={0.9}
                >
                  I build web apps with clean, robust code 
                </Box>
              </Typography>
            </Fade>
            <Fade
              in={fadeIn}
              timeout={1000}
              style={{ transitionDelay: fadeIn ? "1800ms" : "0ms" }}
            >
              <Button
                size={isSm ? "small" : "medium"}
                variant="contained"
                color="primary"
                style={{maxWidth: "135px"}}
                onClick={openContactForm}
              >
                Work with me
              </Button>
            </Fade>
            <Hidden xsDown>
              <Typography variant="body1" style={{marginTop: "25vmin"}} >
              <Link href="https://github.com/CaryTanner"  color="textPrimary" underline="none"><Box className="linkStyles" display="inline"  mr={3}>GITHUB</Box></Link>
              <Link   href="https://www.linkedin.com/in/carytanner/"  color="textPrimary" underline="none"><Box className="linkStyles"  display="inline"  mr={3}>LINKEDIN</Box></Link>
              <Box className="linkStyles"  display="inline" onClick={emailOpen} >EMAIL</Box>
                
                
              </Typography>
            </Hidden>
            
          </Grid>

          
        </Grid>
      </Grid>
      <div id="aboutSection"></div>
      
    </>
  );
}
