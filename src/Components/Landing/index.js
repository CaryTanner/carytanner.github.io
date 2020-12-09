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
} from "@material-ui/core";


export default function Landing() {
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
                  lineHeight={0.8}
                >
                  I can help you build a better website.
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
              >
                Work with me
              </Button>
            </Fade>
            <Hidden xsDown>
              <Typography variant="subtitle2" style={{marginTop: "200px"}}>
                <Box display="inline" mr={3}>GitHub</Box>
                <Box display="inline" mr={3}>LinkedIn</Box>
                <Box display="inline">Email</Box>
              </Typography>
            </Hidden>
          </Grid>

          
        </Grid>
      </Grid>
    </>
  );
}
