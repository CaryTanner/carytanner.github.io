import React, { useState } from "react";
import styles from "./index.module.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  useScrollTrigger,
  Fade,
  useMediaQuery,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import headShotShort from "../../images/headShotShort.png";

export default function About() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapse = () => {
    setIsExpanded((prev) => !prev);
  };
  const paraStyles = {
    lineHeight: 1.9,
    mb: 3,
  };

  return (
    <>
      <Grid container className={styles.aboutContainer}>
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
            sm={9}
            md={8}
            className={styles.landingTextBox}
            container
            direction="column"
            
          >
            <Typography variant="h4">
              <Box color="primary.dark" mb={4} align={isXs ? "center" : "left"}>
                ABOUT ME
              </Box>
            </Typography>

            <Collapse in={isExpanded} collapsedHeight={280} timeout={1500} className={styles.collapse}>
              <Typography variant="body1">
                <Box
                  fontFamily="Roboto Slab"
                  align="justify"
                  mr={isXs ? 0 : "20px"}
                >
                  <Box {...paraStyles} >
                    A little girl pushed me into programming.
                  </Box>
                  <Box {...paraStyles}>
                    While doing sales for a wine importer, I wanted to
                    modernize our website so I took on the <Box display="inline" fontWeight="fontWeightBold" color="primary.main"> challenge of learning </Box>
                     web development. My first project was a "Rock, Paper,
                    Scissors" game that my daughter absolutely
                    loved, asking me "What else can you make?"
                  </Box>
                  <Box {...paraStyles}>
                    Soon, I found myself spending <Box display="inline" fontWeight="fontWeightBold" color="primary.main">all my free time writing code.</Box>
                  </Box>
                  <Box {...paraStyles}>
                    At the same time as I expanded our wine import business into
                    5 new cities and more than <Box display="inline" fontWeight="fontWeightBold" color="primary.main">doubled my sales </Box>year on year, I
                    developed my coding skills with a special focus on React and Node.js.
                  </Box>
                  <Box {...paraStyles}> Then Corona came. </Box>
                  <Box {...paraStyles}>
                    Covid-19 has crippled the hospitality industry I love. But I
                    took this catastrophe as an opportunity to <Box display="inline" fontWeight="fontWeightBold" color="primary.main">launch a new
                    career </Box>in web development.
                  </Box>
                  <Box {...paraStyles}>
                    Originally from California, I studied Spanish and Portguese
                    at UC Berkeley. After school, I worked for years as an
                    English teacher and translator in Madrid, Spain. Later I
                    moved to Stockholm, working for many years as a sommelier,
                    server and, finally, in the wine import trade.
                  </Box>

                  <Box {...paraStyles}>
                  <Box display="inline" fontWeight="fontWeightBold" color="primary.main">Constant learning </Box>has been the throughline of my life. In 8
                    different countries, I have worked with everything from
                    sports reporting to farming fruit. I love meeting new people
                    and especially trying new foods.
                  </Box>
                  <Box {...paraStyles}>
                    Aside from programming, I spend my free time playing with my
                    two daughters and cooking extravagant meals with my wife.
                  </Box>
                </Box>
              </Typography>
            </Collapse>
            
          </Grid>
          <Grid item>
              <IconButton onClick={handleCollapse} style={{transition: "300ms", transform: isExpanded ? "rotate(180deg)" : null }}>
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
        
        </Grid>
        <Grid
          item
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems={isXs ? "center" : "flex-start"}
        >
          <img
            src={headShotShort}
            className={styles.headShot}
            alt="Cary Tanner"
          ></img>
        </Grid>
      </Grid>
    </>
  );
}
