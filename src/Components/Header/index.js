import React, { useEffect, useState } from "react";

import {
  Button,
  Typography,
  Box,
  useScrollTrigger,
  Grid,
  useMediaQuery,
  Hidden,
  Fab,
  Grow,
  Menu,
  MenuItem,
  Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import styles from "./index.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
import CV_Cary_Tanner_Web_Developer from "../../images/CV_Cary_Tanner_Web_Developer.pdf";

function Header({openContactForm}) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200 });
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  //hamburger logic
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
  };

  const boxStyles = {
    color: "palette.text.primary",
    fontWeight: "fontWeightMedium",
    lineHeight: 0.8,

    display: "inline",
  };

  // link scroll

  const smoothScroll = (event) => {
    event.preventDefault();
    const offset = 100;
    const id = event.currentTarget.getAttribute("href").slice(1);
    const anchor = document.getElementById(id);
    const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box {...logoProps} className={styles.logo}>
        TAN{" "}
        <Box style={{ transform: "rotate(180deg) translateX(-2px)" }}>NER</Box>
      </Box>

      <Grid style={{ padding: "2rem 0 0 0" }} container className={styles.nav}>
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <Hidden smDown>
            <Grid
              item
              sm={9}
              md={8}
              className={styles.landingTextBox}
              container
              justify="space-between"
            >
              <Typography variant="body1">
                <Box
                  fontWeight="fontWeightBold"
                  lineHeight={0.8}
                  display="inline"
                  className="linkStyles"
                >
                  START
                </Box>
              </Typography>
              <Typography variant="body1">
                <Box {...boxStyles}>
                  <Link
                    className="linkStyles"
                    color="textPrimary"
                    underline="none"
                    href="#aboutSection"
                    onClick={smoothScroll}
                  >
                    ABOUT
                  </Link>
                </Box>
              </Typography>
              <Typography variant="body1">
                <Box {...boxStyles}>
                  <Link
                    className="linkStyles"
                    color="textPrimary"
                    underline="none"
                    href="#projectsSection"
                    onClick={smoothScroll}
                  >
                    PROJECTS
                  </Link>
                </Box>
              </Typography>
              <Typography variant="body1">
                <Box {...boxStyles} mr={2}>
                  <Link
                    className="linkStyles"
                    target="_blank"
                    color="textPrimary"
                    underline="none"
                    href={CV_Cary_Tanner_Web_Developer}
                  >
                    <LaunchIcon fontSize="inherit" /> CV
                  </Link>
                </Box>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          sm={6}
          xs={11}
          container
          justify="flex-end"
          alignItems="flex-start"
        >
          <Hidden smDown>
            <Button
              variant="contained"
              
              className={styles.rightMenu}
              onClick={openContactForm}
              
            >
              {" "}
              fuck!
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Button onClick={handleClick}>
              <MenuIcon fontSize="large" />
            </Button>
          </Hidden>
        </Grid>
      </Grid>

      <Grow in={trigger}>
        <Fab className={styles.fab} color="primary" onClick={handleClick}>
          <MenuIcon />
        </Fab>
      </Grow>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            color="textPrimary"
            underline="none"
            onClick={smoothScroll}
            href="#startSection"
          >
            Start
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            color="textPrimary"
            underline="none"
            href="#aboutSection"
            onClick={smoothScroll}
          >
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            color="textPrimary"
            underline="none"
            href="#projectsSection"
            onClick={smoothScroll}
          >
            Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            target="_blank"
            color="textPrimary"
            underline="none"
            href={CV_Cary_Tanner_Web_Developer}
          >
            <LaunchIcon fontSize="inherit" /> CV
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="outlined" color="primary" onClick={openContactForm}>
            Contact
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
