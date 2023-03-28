import { Grid, IconButton } from "@mui/material";
import React from "react";
import { Typography, Button, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

import Colors from "../colors/Colors";
import Box from "@mui/material/Box";
import img1 from "../images/img1.png";
import graph from "../images/graph.png";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme, darkTheme) => ({
  // chabge
  rowContainer: {
    paddingLeft: "1em",
    paddingRight: "1em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
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
    width: '100%',
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

function SecondPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const OriginalPrice = styled.span`
    text-decoration: line-through;
    //   font-size: 15px;
    //   font-weight: 100;
    color: #818181;
    //   padding: 0 0.2rem;
  `;
  return (
    <>
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
                style={{ color: Colors.Black }}
              >
                Invest in skills,{" "}
                <span style={{ color: "#3F6FC1" }}>earn 10X</span> of what you
                paid.
              </Typography>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : "left"}
                style={{ color: Colors.Black }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent={matchesMD ? "center" : undefined}
              alignItems={matchesMD ? "center" : undefined}
              className={classes.buttonContainer}
              spacing={1}
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
                            color: Colors.Black,
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          1.2 Cr/Year
                        </Typography>
                      </Grid>
                      <Grid Item>
                        <Typography
                          style={{
                            color: Colors.Black,
                            fontSize: "0.8em",
                            textAlign: "left",
                          }}
                        >
                          highest fresher package
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ width: "50%" }}>
                <Grid
                  item
                  container
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
                            color: Colors.Black,
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          Multiple 100 Ranks
                        </Typography>
                      </Grid>
                      <Grid Item>
                        <Typography
                          style={{
                            color: Colors.Black,
                            fontSize: "0.8em",
                            textAlign: "left",
                          }}
                        >
                          in kickstart last year
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
              //   className={classes.buttonContainer}
              spacing={1}
            >
              <Grid item style={{ width: "50%" }}>
                <Grid
                  item
                  container
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
                            color: Colors.Black,
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          1000+ Offers
                        </Typography>
                      </Grid>
                      <Grid Item>
                        <Typography
                          //   variant="caption"
                          //   align={matchesMD ? "center" : "left"}
                          style={{
                            color: Colors.Black,
                            fontSize: "0.8em",
                            textAlign: "left",
                          }}
                        >
                          from top companies
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ width: "50%" }}>
                <Grid
                  item
                  container
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
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          //   align={matchesMD ? "center" : "left"}
                          style={{
                            color: Colors.Black,
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          Trusted by IITians
                        </Typography>
                      </Grid>
                      <Grid Item>
                        <Typography
                          //   variant="caption"
                          //   align={matchesMD ? "center" : "left"}
                          style={{
                            color: Colors.Black,
                            fontSize: "0.8em",
                            textAlign: "left",
                          }}
                        >
                          for their career prep
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : "flex-end"}
            md={5}
            style={{ marginTop: "2em" }}

            //   style={{backgroundImage: `url(${img1})` , maxWidth: "40em", margin: 0 }}
          >
            {/* <div  style={{backgroundImage: `url(${img1})`, maxWidth: "40em", margin: 0  }} /> */}

            <Box
              sx={{
                width: "70%",
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                // backgroundColor: "primary.dark",
                border: 1,
                borderColor: "#2D5666",
              }}
              //   style={{ padding: "2em" }}
            >
              <Grid item style={{ padding: "2em" }}>
                {/* <Typography
                  variant="caption"
                //   align="left"
                  style={{ color: Colors.Black, textAlign: "left" }}
                >
                  Premium Victory Batch
                </Typography> */}
                <Typography
                  variant="subtitle1"
                  //   align={matchesMD ? "center" : "left"}
                  style={{
                    color: Colors.Black,
                    textAlign: "left",
                    color: "#818181",
                  }}
                >
                  Premium Victory Batch
                </Typography>
                <Typography
                  variant="h4"
                  //   align={matchesMD ? "center" : "left"}
                  style={{ textAlign: "left", color: "#818181" }}
                >
                  <OriginalPrice>₹19,999</OriginalPrice>
                </Typography>
                <Typography
                  variant="h3"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage:
                      "-webkit-linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)",
                    // color: "linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)",
                    textAlign: "left",
                  }}
                >
                  ₹13,999
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  background:
                    "linear-gradient(270deg, #05445E 0%, #022534 100%)",
                  padding: "2em",
                }}
              >
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 1,
                        // backgroundColor: "primary.dark",
                        border: 1,
                        borderColor: "#2D5666",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundImage:
                          "-webkit-linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)",
                      }}
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundImage:
                          "-webkit-linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)",
                      }}
                    />
                  </Grid>
                  <Grid item style={{ width: "80%" }}>
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      100+ Hrs Live Content
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
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
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      50+ Hrs Contest
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
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
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      500+ Problems
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
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
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      Includes an interview bootcamp and access to a mentor
                      network
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
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
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      Enjoy access to our content for one year (paid extensions
                      available)
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  className={classes.buttonContainer}
                  spacing={1}
                >
                  <Grid item>
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
                    <Typography
                      variant="subtitle2"
                      align={matchesMD ? "center" : "left"}
                      style={{
                        color: Colors.white,
                        fontSize: "0.8em",
                        textAlign: "left",
                      }}
                    >
                      Flexible payment options, including no-cost EMI, are
                      available.
                    </Typography>
                  </Grid>
                  <Grid item sx={{ width: '100%' ,marginTop:'1em'}} >
              <IconButton
                className={classes.learnButtonHero}
                variant="contained"
                // rightIcon={}
                style={{
                  background:
                    "linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)",
                  borderRadius: 8,
                  color: "#05445E",
                  width:"100%"
                }}
              >
                Join Now  <ArrowForwardIcon />
              </IconButton>
            </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SecondPage;
