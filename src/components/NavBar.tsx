import { Box, Typography, Avatar } from "@mui/material";

const NavBar: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          "linear-gradient(270deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%)",
        padding: "1rem",
        boxShadow: "0 0.1rem 0.5rem",
      }}
    >
      <Typography variant="h4" sx={{ color: "white" }}>
        Dashboard
      </Typography>
      <Box>
        <Avatar>VP</Avatar>
      </Box>
    </Box>
  );
};

export default NavBar;
