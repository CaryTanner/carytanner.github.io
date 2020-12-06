import React, {useState, useEffect} from "react";
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
  Fade
} from "@material-ui/core";
import codeBoxGroup from "../../images/codeBoxGroup.svg"

export default function Landing() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const [fadeIn, setFadeIn] = useState(false)

 useEffect(()=>{
   return setFadeIn(true) 
    
 }, [])

  return (
    <>

      <Grid container  className={styles.container} style={{padding: "0 2rem"}}>

        <Grid
          item
          sm={6}
          xs={12}
          className={styles.photoSide}
          container
          direction="column"

          justify="center"
          alignItems={isXs ? "center" : "flex-end"}

        >
          <Grid item  sm={6} className={styles.landingTextBox} >

          <Fade in={fadeIn} timeout={1000}>
            <Typography variant="h3" >
              <Box
                fontWeight="fontWeightMedium"
                lineHeight={0.8}
                letterSpacing={-1}
                
              >
                Hi, I'm Cary
              </Box>

            </Typography>
            </Fade>
            <Fade in={fadeIn} timeout={1000} style={{ transitionDelay: fadeIn ? '900ms' : '0ms' }}>
            <Typography variant="h4">
              <Box
                fontWeight="fontWeightLight"
                letterSpacing={-2}
                my={{xs: "3rem",sm: "3.5vw" }}
                lineHeight={0.8}
              >
                I can help you build a better website. 
              </Box>
            </Typography>
            </Fade>
            <Fade in={fadeIn} timeout={1000} style={{ transitionDelay: fadeIn ? '1800ms' : '0ms' }}>
            <Button size={isMobile ? "small" : "medium"} variant="contained" color="primary">
              Work with me
            </Button>
            </Fade>
        </Grid>
        <Hidden smUp>
        <Grid item>
           <img src={codeBoxGroup} className={styles.codeSide} alt="Box of sample code"></img>
           </Grid>
        </Hidden>




        </Grid>


      </Grid>
    </>
  );
}
