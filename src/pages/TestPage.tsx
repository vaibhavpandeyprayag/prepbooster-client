import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import img from "../logo.svg";

const TestPage: React.FC<{}> = () => {
  const imgUrl = "../logo.svg";
  useEffect(() => {
    console.log("TestPage rendered for the first time.");
  }, []);
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container>
        <Grid item xs={12} md={8} lg={9} sx={{ p: "1rem" }}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box sx={{ mt: "2rem" }}>
            <Typography variant="subtitle1">Choose your answers</Typography>
            <RadioGroup name="radioButtonsGroup" onChange={() => {}}>
              <FormControlLabel
                value="A"
                control={<Radio />}
                label={<img src={img} width={200} />}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            minHeight: "88vh",
            background:
              "linear-gradient(180deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%)",
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default TestPage;
