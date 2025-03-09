import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeroImg from "./../../assets/app_logo_transparent_2.png";
import IntroImg1 from "./../../assets/app_logo.png";
import HeroSecImg1 from "./../../assets/hero-sec-img-1.jpg";
import HeroSecImg2 from "./../../assets/hero-sec-img-2.png";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC<{}> = () => {
  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/auth/signup");
  };
  const gotoLogin = () => {
    navigate("/auth/login");
  };

  return (
    <div>
      <Box
        position={"relative"}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        className={"fade-in"}
      >
        <img
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "360px",
            height: "320px",
            zIndex: -1,
            opacity: "50%",
          }}
          src={HeroSecImg1}
        />
        <img
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "480px",
            height: "320px",
            zIndex: -1,
            opacity: "50%",
          }}
          src={HeroSecImg2}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            zIndex: -1,
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              borderRadius: "100%",
              width: 75,
              height: 75,
              backgroundColor: "steelblue",
            }}
          ></Box>
          <Box
            sx={{
              borderRadius: "100%",
              width: 50,
              height: 50,
              backgroundColor: "steelblue",
            }}
          ></Box>
          <Box
            sx={{
              borderRadius: "100%",
              width: 25,
              height: 25,
              backgroundColor: "steelblue",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            zIndex: -1,
            display: "flex",
            flexDirection: "row-reverse",
            gap: 1,
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              borderRadius: "100%",
              width: 75,
              height: 75,
              backgroundColor: "steelblue",
            }}
          ></Box>
          <Box
            sx={{
              borderRadius: "100%",
              width: 50,
              height: 50,
              backgroundColor: "steelblue",
            }}
          ></Box>
          <Box
            sx={{
              borderRadius: "100%",
              width: 25,
              height: 25,
              backgroundColor: "steelblue",
            }}
          ></Box>
        </Box>
        <img src={HeroImg} style={{ width: "50%" }} />
        <Typography
          color={"Highlight"}
          variant={"h4"}
          fontWeight={"bold"}
          my={3}
          sx={{ textShadow: "1px 1px 16px" }}
        >
          Your Pathway to Perfect Scores!
        </Typography>
        <Box
          display={"flex"}
          mt={3}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button variant={"outlined"} onClick={gotoSignup}>
            Signup
          </Button>
          <Button variant={"contained"} onClick={gotoLogin}>
            Login
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6}>
            <img src={IntroImg1} style={{ width: "100%" }} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"h4"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"Highlight"}
              sx={{
                width: { xs: "100%", md: "75%" },
                my: { xs: "1rem", md: "0" },
              }}
            >
              Ace Your Exams with the Best Prep Platform!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant={"h4"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"Highlight"}
              sx={{
                width: { xs: "100%", md: "75%" },
                my: { xs: "1rem", md: "0" },
              }}
            >
              See Your Progress with Clear and Detailed Charts!
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src={IntroImg1} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
