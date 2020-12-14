import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import {

  Grid,
  Typography,
  Box,
  useMediaQuery,

  Button,
  useScrollTrigger,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

import cellarDesktop from "../../images/cellarDesktop.jpg";
import powellsDesktop from "../../images/powellsDesktop.jpg";

import rainingDesktop from "../../images/rainingDesktop.jpg";
import rainingGif_2 from "../../images/rainingGif_2.gif";
import cellarGif from "../../images/cellarGif.gif";
import powellsGif_2 from "../../images/powellsGif_2.gif";

import bootstrapLogo from "../../images/bootstrapLogo.svg";
import gitLogo from "../../images/gitLogo.svg";
import herokuLogo from "../../images/herokuLogo.svg";
import jsLogo from "../../images/jsLogo.svg";
import materialUiLogo from "../../images/materialUiLogo.svg";
import mongodbLogo from "../../images/mongodbLogo.svg";

import nodeNodeJsLogo from "../../images/nodeNodeJsLogo.svg";
import reactLogo from "../../images/reactLogo.svg";
import reactRouterLogo from "../../images/reactRouterLogo.svg";
import sassLogo from "../../images/sassLogo.svg";
import githubLogo from "../../images/githubLogo.svg";
import handlebarsLogo from "../../images/handlebarsLogo.svg";
import expressLogo from "../../images/expressLogo.svg";
import mongoose from "../../images/mongoose.png";
import restApi from "../../images/restApi.png";

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
  };

  const projectGroup = {
    justify: "center",
    alignItems: "center",

    overflow: "hidden",
  };
  const btnProps = {
    variant: "outlined",
    color: "primary",
  };
  const justifyStart = {
    justify: isSm ? "center" : "flex-start",
  };

  const justifyEnd = {
    justify: isSm ? "center" : "flex-end",
  };

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
        <Grid item xs={12}>
          <Typography variant="h5">
            <Box mt={isXs ? 1 : 8} mb={isXs ? 2 : 4} color="primary.dark" >
              LATEST PROJECTS
            </Box>
          </Typography>
        </Grid>

        <Grid item container {...projectGroup} className={styles.projectGroup}>
          <Grid
            item
            {...gridSections}
            container
            {...justifyEnd}
            style={{ marginRight: isSm ? "0px" : "20px" }}
          >
            <img
              className={styles.siteImg}
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
            style={{ marginLeft: isSm ? "0px" : "20px" }}
          >
            {" "}
            <Grid item xs={12}>
              <Typography variant="overline">
                <Box mb={-1} align={isSm ? 'center' : 'left'}>Frontend</Box>
              </Typography>
            </Grid>
            <Typography variant="h4">
              <Box mb={1} color="primary.dark" letterSpacing={-1}>
                Webshop with Custom Checkout
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={2} mb={3} fontFamily="Roboto Slab" align="justify">
                Raining Cats &amp; Dogs is a React App that integrates two REST
                Api's into a pet webshop. Features include product cards and
                detail pages, custom checkout flow and client side routing. Styled
                with Material UI and CSS modules. Tech:
              </Box>
            </Typography>
            <Grid container justify="space-between">
              <Grid item>
                <img
                  className={styles.logos}
                  src={reactLogo}
                  alt="React Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={materialUiLogo}
                  alt="Material Ui Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={reactRouterLogo}
                  alt="React Router Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={jsLogo}
                  alt="JavaScript Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={gitLogo}
                  alt="Git Logo"
                ></img>
              </Grid>
              
            </Grid>
            <Grid container {...justifyStart} spacing={3}>
              <Grid item>
                <Button
                  {...btnProps}
                  target="_blank"
                  href="https://serene-ravine-80856.herokuapp.com/"
                >
                  visit site &nbsp; <LaunchIcon fontSize="inherit" />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  {...btnProps}
                  href="https://github.com/CaryTanner/raining-cats-dogs"
                >
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
          className={styles.projectGroup}
          direction={isSm ? "column-reverse" : "row"}
        >
          <Grid
            item
            {...gridSections}
            className={styles.wordGrid}
            container
            {...justifyEnd}
            style={{ marginRight: isSm ? "0px" : "20px" }}
          >
            <Grid item xs={12}>
              <Typography variant="overline">
                <Box mb={-1} align={isSm ? 'center' : 'right'}>Backend</Box>
              </Typography>
            </Grid>
            <Typography variant="h4">
              <Box
                mb={1}
                color="primary.dark"
                letterSpacing={-2}
                align={isSm ? "center" : "right"}
              >
                Wine Cellar Inventory CRUD App
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={2} mb={3} fontFamily="Roboto Slab" align="justify">
                Cellar Stock organizes the complex inventory of a wine cellar
                using{" "}
                <Box display="inline" fontWeight="fontWeightBold">
                  MVC{" "}
                </Box>{" "}
                software built with Mongo DB Atlas cloud platform for data
                storage with full Create-Read-Update-Delete functionality and
                server side rendering. Styling with Bootstrap. Tech:
              </Box>
            </Typography>
            <Grid container justify="space-between">
              <Grid item>
                <img
                  className={styles.logos}
                  src={nodeNodeJsLogo}
                  alt="Node JS Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={expressLogo}
                  alt="Express Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={mongodbLogo}
                  alt="Mongo DD Logo"
                  style={{ height: "25px" }}
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={handlebarsLogo}
                  alt="Handlebars Logo"
                  style={{ height: "10px", transform: "translateY(10px)" }}
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={bootstrapLogo}
                  alt="Bootstrap Logo"
                ></img>
              </Grid>
              
            </Grid>
            <Grid container {...justifyEnd} spacing={3}>
              <Grid item>
                <Button
                  {...btnProps}
                  target="_blank"
                  href="https://cellar-stock.herokuapp.com/catalog"
                >
                  visit site &nbsp; <LaunchIcon fontSize="inherit" />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  {...btnProps}
                  href="https://github.com/CaryTanner/cellar-stock"
                >
                  Github code
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            {...gridSections}
            container
            {...justifyStart}
            style={{ marginLeft: isSm ? "0px" : "20px" }}
          >
            <img
              className={styles.siteImg}
              src={cellarImgSrc}
              alt="Screenshot of Cellar Stock App"
            ></img>
          </Grid>
        </Grid>

        <Grid item container {...projectGroup} className={styles.projectGroup}>
        <Grid
            item
            {...gridSections}
            container
            {...justifyEnd}
            style={{ marginRight: isSm ? "0px" : "20px" }}
          >
            <img
              className={styles.siteImg}
              src={powellsImgSrc}
              alt="Screenshot of Powell's Produce App"
            ></img>
          </Grid>
          
          <Grid
            item
            {...gridSections}
            className={styles.wordGrid}
            container
            {...justifyStart}
            style={{ marginLeft: isSm ? "0px" : "20px" }}
          >
            <Grid item xs={12}>
              <Typography variant="overline">
                <Box mb={-1} align={isSm ? 'center' : 'left'}>Frontend</Box>
              </Typography>
            </Grid>
            <Typography variant="h4">
              <Box
                mb={1}
                color="primary.dark"
                letterSpacing={-2}
                
              >
                Recipe Search &amp; Grocery Orders
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box mt={2} mb={3} fontFamily="Roboto Slab" align="justify">
                Powell's Produce uses React &amp; the REST Api Spoonacular for
                recipe search including autocomplete suggestions. Features
                include ordering directly from ingredient lists and Formik form
                validation. Custom styling with SASS. Tech:
              </Box>
            </Typography>
            <Grid container justify="space-between">
              <Grid item>
                <img
                  className={styles.logos}
                  src={reactLogo}
                  alt="React Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={sassLogo}
                  alt="Sass Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={restApi}
                  alt="Rest API Logo"
                  style={{ height: "20px", transform: "translateY(5px)" }}
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={jsLogo}
                  alt="JavaScript Logo"
                ></img>
              </Grid>
              <Grid item>
                <img
                  className={styles.logos}
                  src={gitLogo}
                  alt="Git Logo"
                ></img>
              </Grid>
              
            </Grid>
            <Grid container {...justifyStart} spacing={3}>
              <Grid item>
                <Button
                  {...btnProps}
                  target="_blank"
                  href="https://powells-produce.herokuapp.com"
                >
                  visit site &nbsp; <LaunchIcon fontSize="inherit" />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  {...btnProps}
                  href="https://github.com/CaryTanner/powells-produce"
                >
                  GitHub Code
                </Button>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </>
  );
}
