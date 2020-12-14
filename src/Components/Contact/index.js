import { StylesProvider } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import styles from "./index.module.css";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Hidden,
  Link,
  Grow,
  Fade
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CV_Cary_Tanner_Web_Developer from "../../images/CV_Cary_Tanner_Web_Developer.pdf";

export default function Contact({ emailOpen, openContactForm }) {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const textRef = React.createRef();
  const [scrollTrigger, setScrollTrigger] = useState(undefined);
  
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


  const gridSections = {
    xs: 10,
    sm: 9,
    md: 8,
    xl: 8,
  };

  // tanner logo designs
  const logoProps = {
    border: 4,
    p: 0.5,
    fontFamily: "roboto mono, monospace",
    lineHeight: 0.8,
    letterSpacing: -2,
    fontWeight: "fontWeightBold",
    fontSize: "30px",
    display: "table",
    marginTop: "-1rem",
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className={styles.contactContainer}
      >
        <Grid
          item
          {...gridSections}
          container
          justify={isXs ? "center" : "space-between"}
        >
          <Grid
            item
            xs={10}
            sm={7}
            md={9}
            style={{ marginLeft: isSm ? "0px" : "-20px" }}
          >
              
            <Typography variant={isXs ? "h3" : "h4"}>
            
              <Box
                color="primary.dark"
                fontWeight="fontWeightMedium"
                letterSpacing={-1}
                align={isXs ? "center" : "left"}
                
              >
                Looking to hire an ambitious web developer?
              </Box>
              
            </Typography>
            
           
          </Grid>
          <Grid
            item
            style={{
              marginRight: isSm ? "0px" : "-20px",
              marginTop: isXs ? "2rem" : "0px",
            }}
          >
              <Grow in={scrollTrigger} timeout={1200} style={{ transitionDelay: scrollTrigger ? "500ms" : "0ms" }} >
            <Button
              variant="contained"
              color="primary"
              onClick={openContactForm}
              size="large"
            ><ArrowRightAltIcon/> &nbsp;&nbsp; Work with me
            </Button>
            </Grow>
          </Grid>
        </Grid>

        <Grid
          item
          {...gridSections}
          container
          alignItems={isXs ? "center" : null}
          justify={isXs ? "center" : "space-between"}
          direction={isXs ? "column-reverse" : "row"}
        >
          <Grid
            item
            xs={6}
            sm={4}
            md={6}
            style={{ marginLeft: isSm ? "0px" : "-20px" }}
            container
            justify={isXs ? "center" : "flex-start"}
            alignItems={isXs ? "center" : null}
            direction={isXs ? "column" : "row"}
          >
            <Typography>
              <Box
                {...logoProps}
                className={styles.logo}
                align={isXs ? "center" : "left"}
              >
                TAN{" "}
                <Box style={{ transform: "rotate(180deg) translateX(-1px)" }}>
                  NER
                </Box>
              </Box>
            </Typography>
            <Hidden only="sm">
              <Typography variant="body1">
                <Box
                  ml={isXs ? 0 : 2}
                  mt={isXs ? 1 : 0}
                  display="block"
                  align={isXs ? "center" : "left"}
                  
                >
                  Made by Cary Tanner
                </Box>
              </Typography>
            </Hidden>
          </Grid>
          <Grid
            item
            style={{
              marginRight: isSm ? "0px" : "-20px",
              margin: isXs ? "4rem 0 3rem 0" : "0px",
            }}
          >
            <Typography variant="body1">
              <Link
                href="https://github.com/CaryTanner"
                color="textPrimary"
                underline="none"
              >
                <Box className="linkStyles" display="inline" mr={isXs ? 2 : 3}>
                  GITHUB
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/in/carytanner/"
                color="textPrimary"
                underline="none"
              >
                <Box className="linkStyles" display="inline" mr={isXs ? 2 : 3}>
                  LINKEDIN
                </Box>
              </Link>
              <Box
                className="linkStyles"
                display="inline"
                mr={isXs ? 2 : 3}
                onClick={emailOpen}
              >
                EMAIL
              </Box>
              <Link
                target="_blank"
                color="textPrimary"
                underline="none"
                href={CV_Cary_Tanner_Web_Developer}
              >
                <Box className="linkStyles" display="inline">
                  
                  <LaunchIcon fontSize="inherit" /> CV
                </Box>
              </Link>
              <span ref={textRef}></span>
            </Typography>
          </Grid>
        </Grid>
        
      </Grid >

      <Box className={styles.triangle}></Box>
    </>
  );
}
