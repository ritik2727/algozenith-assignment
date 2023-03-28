import { Grid, IconButton } from "@mui/material";
import React from "react";
import { Typography, Button, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

import Colors from "../colors/Colors";
import Box from "@mui/material/Box";
import img1 from "../images/img1.png";
import { Hidden } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const useStyles = makeStyles((theme, darkTheme) => ({
  // chabge
  rowContainer: {
    paddingLeft: "1em",
    paddingRight: "1em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: Colors.blue,
    color: "#FFFFFF",
    borderRadius: 50,
    fontFamily: "Roboto",
    height: 50,
    width: 145,
    // marginRight: 40,
    "&:hover": {
      backgroundColor: Colors.blue,
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width: 110,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    backgroundColor: "#1976D2",
    color: "#FFFFFF",
    height: 45,
    width: 170,
    "&:hover": {
      backgroundColor: Colors.blue,
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width: 150,
    },
  },

  specialText: {
    fontFamily: "sans-serif",
    color: "#1976D2",
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems={matchesMD ? "center" : undefined}
          md={7}
          style={{ maxWidth: "36em" }}
        >
          <Grid item>
            <Typography
              variant="h3"
              align={matchesMD ? "center" : "left"}
              style={{ color: Colors.white }}
            >
              Be better at DSA & CP
            </Typography>
            <Typography
              variant="subtitle1"
              align={matchesMD ? "center" : "left"}
              style={{ color: Colors.white }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Hidden smDown>
          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : undefined}
            className={classes.buttonContainer}
            spacing={3}
          >
            <Grid item>
              <IconButton
                className={classes.learnButtonHero}
                variant="contained"
                // rightIcon={}
                style={{
                  background:
                    "linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)",
                  borderRadius: 8,
                  color: "#05445E",
                }}
              >
                Join Now  <ArrowForwardIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                className={classes.learnButtonHero}
                style={{
                  borderRadius: 8,
                  background:
                    "linear-gradient(94.24deg, #033042 -0.03%, #005C83 99.97%)",
                }}
                variant="contained"
              >
                View curriculum
              </Button>
            </Grid>
          </Grid>
          </Hidden>
          <Grid
            container
            //   justifyContent={matchesMD ? "center" : undefined}
            className={classes.buttonContainer}
            spacing={3}
          >
            <Grid
              item
              style={{ width: "50%" }}
              justifyContent={matchesMD ? "center" : undefined}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className={classes.buttonContainer}
                spacing={1}
              >
                <Grid item style={{ width: "20%" }}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      // backgroundColor: "primary.dark",
                      border: 1,
                      borderColor: "#2D5666",
                    }}
                    style={{}}
                  />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <Grid Item container direction="column">
                    <Grid Item>
                      <Typography
                        variant="subtitle1"
                        //   align={matchesMD ? "center" : "left"}
                        style={{
                          color: Colors.white,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

             <Grid
              item
              style={{ width: "50%" }}
              justifyContent={matchesMD ? "center" : undefined}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className={classes.buttonContainer}
                spacing={1}
              >
                <Grid item style={{ width: "20%" }}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      // backgroundColor: "primary.dark",
                      border: 1,
                      borderColor: "#2D5666",
                    }}
                    style={{}}
                  />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <Grid Item container direction="column">
                    <Grid Item>
                      <Typography
                        variant="subtitle1"
                        //   align={matchesMD ? "center" : "left"}
                        style={{
                          color: Colors.white,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            //   justifyContent={matchesMD ? "center" : undefined}
            className={classes.buttonContainer}
            spacing={2}
          >
             <Grid
              item
              style={{ width: "50%" }}
              justifyContent={matchesMD ? "center" : undefined}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className={classes.buttonContainer}
                spacing={1}
              >
                <Grid item style={{ width: "20%" }}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      // backgroundColor: "primary.dark",
                      border: 1,
                      borderColor: "#2D5666",
                    }}
                    style={{}}
                  />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <Grid Item container direction="column">
                    <Grid Item>
                      <Typography
                        variant="subtitle1"
                        //   align={matchesMD ? "center" : "left"}
                        style={{
                          color: Colors.white,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              style={{ width: "50%" }}
              justifyContent={matchesMD ? "center" : undefined}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className={classes.buttonContainer}
                spacing={1}
              >
                <Grid item style={{ width: "20%" }}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: 1,
                      // backgroundColor: "primary.dark",
                      border: 1,
                      borderColor: "#2D5666",
                    }}
                    style={{}}
                  />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <Grid Item container direction="column">
                    <Grid Item>
                      <Typography
                        variant="subtitle1"
                        //   align={matchesMD ? "center" : "left"}
                        style={{
                          color: Colors.white,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smUp>
          <Grid
            item
            container
            direction='column'
            justifyContent={matchesMD ? "center" : undefined}
            className={classes.buttonContainer}
            spacing={3}
          >
            <Grid item sx={{width:'100%'}}>
              <IconButton
                className={classes.learnButtonHero}
                variant="contained"
                // rightIcon={}
                style={{
                  background:
                    "linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)",
                  borderRadius: 8,
                  color: "#05445E",
                  width:'100%'
                }}
              >
                Join Now  <ArrowForwardIcon />
              </IconButton>
            </Grid>
            <Grid item sx={{width:'100%'}}>
              <Button
                className={classes.learnButtonHero}
                style={{
                  borderRadius: 8,
                  background:
                    "linear-gradient(94.24deg, #033042 -0.03%, #005C83 99.97%)",
                    width:'100%'
                }}
                variant="contained"
                
              >
                View curriculum
              </Button>
            </Grid>
          </Grid>
          </Hidden>
        </Grid>

        <Grid
          item
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
          md={5}
          //   style={{backgroundImage: `url(${img1})` , maxWidth: "40em", margin: 0 }}
        >
          {/* <div  style={{backgroundImage: `url(${img1})`, maxWidth: "40em", margin: 0  }} /> */}

          <img
            src={img1}
            alt="image1"
            style={{ maxWidth: matchesSM ? "20em" : "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
