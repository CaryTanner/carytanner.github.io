import { StylesProvider } from "@material-ui/core";
import React from "react";
import styles from "./index.module.css";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Hidden,
  Link,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import CV_Cary_Tanner_Web_Developer_December_2020 from "../../images/CV_Cary_Tanner_Web_Developer_December_2020.pdf";

export default function Contact({ emailOpen, openContactForm }) {
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
            <Typography variant="h5">
              <Box my={isXs ? 2 : 1} align={isXs ? "center" : "left"}>
                Let's get in touch!
              </Box>
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginRight: isSm ? "0px" : "-20px",
              marginTop: isXs ? "1rem" : "0px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={openContactForm}
            >
              Work with me
            </Button>
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
              <Typography variant="subtitle1">
                <Box
                  ml={2}
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
                <Box className="linkStyles" display="inline" mr={3}>
                  GITHUB
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/in/carytanner/"
                color="textPrimary"
                underline="none"
              >
                <Box className="linkStyles" display="inline" mr={3}>
                  LINKEDIN
                </Box>
              </Link>
              <Box
                className="linkStyles"
                display="inline"
                mr={3}
                onClick={emailOpen}
              >
                EMAIL
              </Box>
              <Link
                target="_blank"
                color="textPrimary"
                underline="none"
                href={CV_Cary_Tanner_Web_Developer_December_2020}
              >
                <Box className="linkStyles" display="inline">
                  {" "}
                  <LaunchIcon fontSize="inherit" /> CV
                </Box>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box className={styles.triangle}></Box>
    </>
  );
}
