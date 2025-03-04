import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import img from "../logo.svg";
import Logo from "../assets/app_logo_transparent_2.png";

const TestPage: React.FC<{}> = () => {
  const imgUrl = "../logo.svg";
  useEffect(() => {
    console.log("TestPage rendered for the first time.");
  }, []);
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container sx={{ backgroundColor: "rgb(211 211 211 / 25%)" }}>
        <Grid
          xs={12}
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          height={"10vh"}
          boxShadow={"5"}
          px={"1rem"}
          sx={{ backgroundColor: "Background" }}
        >
          <img
            alt=""
            src={Logo}
            style={{
              height: "2rem",
              cursor: "pointer",
              marginLeft: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />

          <Typography
            sx={{
              backgroundColor: "oldlace",
              paddingX: "16px",
              paddingY: "5px",
              color: "black",
            }}
          >
            Unit Test 1
          </Typography>

          <Box sx={{ display: "flex", alignItems: "stretch", gap: "1rem" }}>
            <Box
              id="testRemainTime"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "beige",
                paddingX: "1rem",
                gap: "0.5rem",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                Time Remaining:{" "}
              </Typography>
              <Typography>02:34:05</Typography>
            </Box>
            <Button variant={"contained"} sx={{ textTransform: "uppercase" }}>
              End Test
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ position: "relative", height: "90vh" }}
          order={{ xs: 2, md: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#333399",

              borderBottom: 1,
              borderColor: "lightgray",
            }}
          >
            <Typography
              sx={{
                color: "white",
                paddingX: "1rem",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              Question {1}
            </Typography>
            <Box
              sx={{
                // backgroundColor: "rgb(137, 207, 240)",
                borderLeft: "1px solid lightgray",
                height: "100%",
                alignContent: "center",
                paddingX: "1rem",
                // background:
                //   "linear-gradient(to left,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.1))",
                // background: "transparent",
                // backdropFilter: "blur(16px)",
              }}
            >
              <Typography
                sx={{ fontSize: 12, letterSpacing: 1, color: "white" }}
              >
                Marks:{" "}
                <span
                  style={{
                    // color: "lightgreen",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {4}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: 12, letterSpacing: 1, color: "white" }}
              >
                Negative marking:{" "}
                <span
                  style={{
                    // color: "rgb(254, 150, 150)",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {1}
                </span>
              </Typography>
            </Box>
          </Box>
          <Box
            id="questionBox"
            sx={{ padding: "1rem", backgroundColor: "azure" }}
          >
            <Typography variant="body1" fontFamily={"Times New Roman"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          <Box sx={{ mt: "1rem", padding: "1rem" }}>
            <RadioGroup name="radioButtonsGroup" onChange={() => {}}>
              <FormControlLabel
                value="A"
                control={<Radio />}
                label={<img alt="" src={img} width={200} />}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Box>
          <Grid
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              right: 0,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "0.5rem",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: "1rem",
              backgroundColor: "ThreeDFace",
            }}
          >
            <Button>Clear Response</Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "0.5rem",
              }}
            >
              <Button variant={"contained"}>Previous</Button>
              <Button variant={"contained"} color={"secondary"}>
                Mark for review and Next
              </Button>
              <Button variant={"contained"} color={"success"}>
                Save and Next
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ borderLeft: "1px solid lightgray" }}
          order={{ xs: 1, md: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "start",
              gap: "1rem",
              padding: "1rem",
              minHeight: { md: "60vh" },
              maxHeight: { xs: "30vh" },
              overflow: "scroll",
              overflowX: "hidden",
              scrollbarWidth: "thin",
            }}
          >
            {","
              .repeat(30)
              .split(",")
              .map((question, i) => (
                <Button
                  key={"key" + i}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "40px", md: "56px" },
                    height: { xs: "44px", md: "56px" },
                    border: "2px solid lightgray",
                    borderRadius: "8px",
                    background: "linear-gradient(white, lightgray)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    {i + 1}
                  </Typography>
                </Button>
              ))}
          </Box>
          <Box
            sx={{
              minHeight: { xs: "15vh", md: "30vh" },
              maxHeight: { xs: "15vh" },
              boxShadow: "2px -1px 8px gray", // Top shadow
            }}
            boxShadow={"1"}
          >
            <Grid
              container
              sx={{
                height: "100%",
              }}
            >
              <Grid
                item
                xs={3}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "44px", md: "56px" },
                      height: { xs: "44px", md: "56px" },
                      marginBottom: "4px",
                      border: "2px solid lightgray",
                      borderRadius: "8px",
                      background: "linear-gradient(white, lightgray)",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "auto",
                        fontSize: { xs: "12px", md: "16px" },
                        color: "black",
                      }}
                    >
                      12
                    </Typography>
                  </Button>
                  <Typography sx={{ letterSpacing: 1, fontSize: "12px" }}>
                    Not visited
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "0.5rem",
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "44px", md: "56px" },
                      height: { xs: "44px", md: "56px" },
                      marginBottom: "4px",
                      border: "2px solid lightgray",
                      borderRadius: "8px",
                      background: "linear-gradient(white, red)",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "auto",
                        fontSize: { xs: "12px", md: "16px" },
                        color: "black",
                      }}
                    >
                      12
                    </Typography>
                  </Button>
                  <Typography sx={{ letterSpacing: 1, fontSize: "12px" }}>
                    Not answered
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "0.5rem",
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "44px", md: "56px" },
                      height: { xs: "44px", md: "56px" },
                      marginBottom: "4px",
                      border: "2px solid lightgray",
                      borderRadius: "8px",
                      background: "linear-gradient(white, lightgreen)",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "auto",
                        fontSize: { xs: "12px", md: "16px" },
                        color: "black",
                      }}
                    >
                      12
                    </Typography>
                  </Button>
                  <Typography sx={{ letterSpacing: 1, fontSize: "12px" }}>
                    Answered
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "0.5rem",
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "44px", md: "56px" },
                      height: { xs: "44px", md: "56px" },
                      marginBottom: "4px",
                      border: "2px solid lightgray",
                      borderRadius: "8px",
                      background: "linear-gradient(white, yellow)",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "auto",
                        fontSize: { xs: "12px", md: "16px" },
                        color: "black",
                      }}
                    >
                      12
                    </Typography>
                  </Button>
                  <Typography sx={{ letterSpacing: 1, fontSize: "12px" }}>
                    Marked for review
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestPage;
