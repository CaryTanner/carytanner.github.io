import { StylesProvider } from "@material-ui/core";
import React from "react";
import styles from "./index.module.css";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
} from "@material-ui/core";

export default function Contact() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
    marginTop: "-1rem"
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
        <Grid item {...gridSections} container justify={isXs ? "center" : "space-between"}>
          <Grid
            item
            xs={10}
            sm={8}
            md={10}
            style={{ marginLeft: isSm ? "0px" : "-20px" }}
          >
            <Typography variant="h4">
              <Box
                color="primary.main"
                fontWeight="fontWeightMedium"
                letterSpacing={-1}
                
                align={isXs ? "center" : "left"}
              >
                Want to hire an ambitious web developer?
              </Box>
            </Typography>
            <Typography variant="h5" >
              <Box my={isXs ? 3 : 1} align={isXs ? "center" : "left"}>Let's get in touch!</Box>
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: isSm ? "0px" : "-20px", marginTop: isXs ? "1rem" : "0px" }}>
            <Button  variant="contained" color="primary">
              Work with me
            </Button>
          </Grid>
        </Grid>

        <Grid item   {...gridSections} container justify="space-between" >
          <Grid
            item
            xs={10}
            sm={7}
            md={8}
            style={{ marginLeft: isSm ? "0px" : "-20px" }}
            container
            
          >
            <Typography >
              <Box {...logoProps}  className={styles.logo}>
                TAN{" "}
                <Box style={{ transform: "rotate(180deg) translateX(-2px)" }}>
                  NER
                </Box>
              </Box>
            </Typography>
            <Typography variant="subtitle1">
                <Box ml={4} >Made by Cary Tanner</Box>
                
                </Typography>
          </Grid>
          <Grid item style={{ marginRight: isSm ? "0px" : "-20px", marginTop: isXs ? "1rem" : "0px" }}>
          <Typography  variant="h6" >
                <Box display="inline" mr={3}>GitHub</Box>
                <Box display="inline" mr={3}>LinkedIn</Box>
                <Box display="inline">Email</Box>
              </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box className={styles.triangle}></Box>
    </>
  );
}
