import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const InstructionPage: React.FC<{}> = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(109, 192, 255)", height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 1,
          backgroundColor: "#333399",
        }}
      >
        <Typography variant={"h5"} color={"white"} letterSpacing={2}>
          Instructions
        </Typography>
        <Box>
          <Button sx={{ color: "white" }}>
            <ArrowBack />
          </Button>
          <Button sx={{ color: "white" }}>
            <ArrowForward />
          </Button>
          <Button sx={{ color: "white" }}>Skip</Button>
        </Box>
      </Box>
      <Box
        sx={{
          margin: 3,
          padding: 2,
          backgroundColor: "white",
          borderRadius: 5,
          height: "75vh",
        }}
      >
        <Box id="ins1"></Box>
        <Box id="ins2"></Box>
        <Box id="ins3"></Box>
        <Box id="ins4"></Box>
        <Box
          id="goForTest"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant={"h5"} fontWeight={"500"}>
            All the best!
          </Typography>
          <Button variant={"contained"} sx={{ paddingX: 5 }}>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InstructionPage;
