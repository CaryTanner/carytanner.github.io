import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Paper,
  Button,
  useScrollTrigger,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";


import cellarDesktop from "../../images/cellarDesktop.jpg";
import powellsDesktop from "../../images/powellsDesktop.jpg";

import rainingDesktop from "../../images/rainingDesktop.jpg";
import rainingGif_2 from "../../images/rainingGif_2.gif";
import cellarGif from "../../images/cellarGif.gif";
import powellsGif_2 from "../../images/powellsGif_2.gif"

export default function Projects() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const scrollTrigger = useScrollTrigger({
    threshold: 500,
    disableHysteresis: true,
  });
  
  const [rainingImgSrc, setRainingImgSrc] = useState(rainingDesktop);
  const [powellsImgSrc, setPowellsImgSrc] = useState(powellsDesktop);
  const [cellarImgSrc, setCellarImgSrc] = useState(cellarDesktop);

  useEffect(() => {
    if (scrollTrigger) {
      setRainingImgSrc(rainingGif_2);
      setPowellsImgSrc(powellsGif_2);
      setCellarImgSrc(cellarGif);
    }
  }, [scrollTrigger]);

  const gridSections = {
    xs: 10,
    sm: 9,
    md: 4,
   
  }

  const projectGroup = {
    
    justify: "center",
    alignItems: "center",
    
    overflow: "hidden"
     
  }
  const btnProps = {
    variant: "outlined",
    color: "primary",
    size: isMd ? "small" : "medium"
  }
  const justifyStart = {
    justify: isSm ? "center" : "flex-start",
   
    
    
  }

  const justifyEnd = {
    justify: isSm ? "center" : "flex-end",
    
  }

  return (
    <>
      <Grid
      id="projectsSection"
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.projectsContainer}
        
        
      >
        <Grid item xs={12} >
          <Typography variant="h3">
            <Box mt={isXs ? 2 : 8} mb={isXs ? 2 : 4}  color="primary.main" >
              PROJECTS
            </Box>
          </Typography>
        </Grid>
        
        <Grid
          item
          container
          {...projectGroup}
          className={styles.projectGroup}
        >
          <Grid
            item
            
            {...gridSections}
            container
            {...justifyEnd}
            style={{marginRight: isSm ? "0px" : "20px"}}
          >
            
              
              <img
                src={rainingImgSrc}
                alt="Screenshot of Raining Cats and Dogs App"
              ></img>
            
          </Grid>

          <Grid
            item
            
            {...gridSections}
            className={styles.wordGrid}
            container
            {...justifyStart}
           style={{ marginLeft: isSm ? "0px" : "20px"}}
          >
            <Typography variant="h4">
              <Box mb={1} color="primary.dark" letterSpacing={-1}>
                Raining Cats &amp; Dogs
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={1} mb={4} fontFamily="Roboto Slab" align="justify">
                Some explaination - Users might have specified a preference for
                a light or main theme. The method by which the user expresses
                their preference can vary. It might be a system-wide setting
                exposed by the Operating System, or a setting controlled by the
                User Agent.
              </Box>
            </Typography>
            <Grid container {...justifyStart} spacing={3}>
              <Grid item> 
              <Button {...btnProps} target="_blank" href="https://serene-ravine-80856.herokuapp.com/">
              visit site &nbsp; <LaunchIcon fontSize="inherit"/>
            </Button>
            </Grid>
            <Grid item>
            <Button {...btnProps} href="https://github.com/CaryTanner/raining-cats-dogs">
              GitHub Code
            </Button>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          {...projectGroup}
          direction={ isSm ? "column-reverse" : "row"}
          className={styles.projectGroup}
        >
          <Grid
            item
            {...gridSections}
            className={styles.wordGrid}
            container
            {...justifyEnd}
            style={{marginRight: isSm ? "0px" : "20px"}}
          >
            <Typography variant="h4">
              <Box mb={1} color="primary.dark" letterSpacing={-1}>
                Powell's Produce
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={1} mb={4} fontFamily="Roboto Slab" align="justify">
                Some explaination - Users might have specified a preference for
                a light or main theme. The method by which the user expresses
                their preference can vary. It might be a system-wide setting
                exposed by the Operating System, or a setting controlled by the
                User Agent.
              </Box>
            </Typography>
            <Grid container {...justifyEnd} spacing={3}>
              <Grid item> 
              <Button {...btnProps} target="_blank" href="https://powells-produce.herokuapp.com">
              visit site &nbsp; <LaunchIcon fontSize="inherit"/>
            </Button>
            </Grid>
            <Grid item>
            <Button {...btnProps} href="https://github.com/CaryTanner/powells-produce">
              GitHub Code
            </Button>
            </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            {...gridSections}
            
            container
            {...justifyStart}
            style={{ marginLeft: isSm ? "0px" : "20px"}}
          >
            
              <img
                src={powellsImgSrc}
                alt="Screenshot of Powell's Produce App"
              ></img>
             
          </Grid>
        </Grid>
        <Grid
          item
          container
          {...projectGroup}
          className={styles.projectGroup}
        >
          <Grid
            item
            {...gridSections}
            container
            {...justifyEnd}
            style={{marginRight: isSm ? "0px" : "20px"}}
          >
           
              <img
                src={cellarImgSrc}
                alt="Screenshot of Cellar Stock App"
              ></img>
              
           
          </Grid>

          <Grid
            item
            {...gridSections}
            className={styles.wordGrid}
            container
            {...justifyStart}
            style={{ marginLeft: isSm ? "0px" : "20px"}}
          >
            <Typography variant="h4">
              <Box mb={1} color="primary.dark" letterSpacing={-1}>
                Cellar Stock
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={1} mb={4} fontFamily="Roboto Slab" align="justify">
                Some explaination - Users might have specified a preference for
                a light or main theme. The method by which the user expresses
                their preference can vary. It might be a system-wide setting
                exposed by the Operating System, or a setting controlled by the
                User Agent.
              </Box>
            </Typography>
            <Grid container {...justifyStart} spacing={3}>
              <Grid item> 
              <Button {...btnProps} target="_blank" href="https://cellar-stock.herokuapp.com/catalog">
              visit site &nbsp; <LaunchIcon fontSize="inherit"/>
            </Button>
            </Grid>
            <Grid item>
            <Button {...btnProps} href="https://github.com/CaryTanner/cellar-stock">
              Github code
            </Button>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles.triangle}></Box>
    </>
  );
}
