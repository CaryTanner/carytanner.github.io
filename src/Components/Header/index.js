import React, { useEffect, useState } from "react";

import {
  Button,
  Typography,
  Box,
  useScrollTrigger,
  makeStyles,
  Container,
  Grid,
  useMediaQuery,
  Hidden,
  Fab,
  Grow,
  Menu,
  MenuItem
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import styles from "./index.module.css";
import LaunchIcon from "@material-ui/icons/Launch";


function Header() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200});
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
 const logoProps ={
   border: 4,
   p: .5,
   fontFamily: "roboto mono, monospace",
   lineHeight: .8,
   letterSpacing: -2,
   fontWeight: "fontWeightBold",
   fontSize: "30px"
 }


  return (
    <>
      <Box {...logoProps} className={styles.logo}>TAN <Box style={{transform: "rotate(180deg) translateX(-2px)"}}>NER</Box></Box>
      
      
      
      <Grid
        style={{ padding: "2rem 2rem 0 2rem" }}
        container
        className={styles.nav}
      >
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <Hidden xsDown>
          <Grid
            item
            sm={6}
            className={styles.landingTextBox}
            container
            justify="space-between"
            
          >
            <Typography variant="body1">
              <Box
                fontWeight="fontWeightBold"
                lineHeight={0.8}
                letterSpacing={-1}
                display="inline"
              >
                START
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box
                fontWeight="fontWeightMedium"
                lineHeight={0.8}
                letterSpacing={-1}
                display="inline"
              >
                ABOUT
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box
                fontWeight="fontWeightMedium"
                lineHeight={0.8}
                letterSpacing={-1}
                display="inline"
              >
                PROJECTS
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box
                fontWeight="fontWeightMedium"
                lineHeight={0.8}
                letterSpacing={-1}
                display="inline"
                mr={{  lg: 5, md: 5, sm: 1 }}
              >
                <LaunchIcon fontSize="inherit" /> CV
              </Box>
            </Typography>
          </Grid>
          </Hidden>
        </Grid>
        <Grid item sm={6} container justify="flex-end" >
          <Hidden xsDown>
          <Button variant="contained" color={isXs ? 'primary' : 'secondary'} size={isXs ? 'small' : 'medium'}>
            {" "}
            contact
          </Button>
          </Hidden>
          <Hidden smUp>
            <Button variant="outlined"  onClick={handleClick}><MenuIcon /></Button>
          </Hidden>
        </Grid>
      </Grid>
      <Grow in={trigger}>
      <Fab className={styles.fab} color="primary" onClick={handleClick} >
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
        <MenuItem onClick={handleClose}>Start</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}><LaunchIcon fontSize="inherit" />&nbsp;CV</MenuItem>
        <MenuItem onClick={handleClose}><Button variant="outlined" color="primary">Contact</Button></MenuItem>
      </Menu>
    </>
  );
}

export default Header;
