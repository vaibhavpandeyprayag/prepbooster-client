import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"50vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant={"h3"} fontWeight={"bold"}>
        Page not found!
      </Typography>
      <Button
        variant={"outlined"}
        color={"error"}
        sx={{ mt: "2rem" }}
        onClick={gotoHome}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
