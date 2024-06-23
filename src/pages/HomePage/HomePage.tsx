import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeroImg from "./../../assets/app_logo_transparent_2.png";
import IntroImg1 from "./../../assets/app_logo.png";
import "./HomePage.css";

const HomePage: React.FC<{}> = () => {
  return (
    <div className={"homepage"}>
      <Box
        height={"100vh"}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        className={"hero-section fade-in"}
      >
        <img src={HeroImg} style={{ width: "50%" }} />
        <Typography
          color={"Highlight"}
          variant={"h4"}
          fontWeight={"bold"}
          my={3}
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
          <Button variant={"outlined"}>Signup</Button>
          <Button variant={"contained"}>Login</Button>
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
