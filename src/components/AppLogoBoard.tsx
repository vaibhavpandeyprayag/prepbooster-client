import { Outlet, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Logo from "../assets/app_logo_transparent_2.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const AppLogoBoard: React.FC<{}> = () => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/home");
  };
  return (
    <Box
      sx={{
        backgroundColor: "rgb(211 211 211 / 25%)",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"10vh"}
        boxShadow={"5"}
        px={"1rem"}
        sx={{ backgroundColor: "Background" }}
      >
        <Button
          sx={{
            minWidth: "2rem",
            minHeight: "2rem",
          }}
          onClick={logoClick}
        >
          <KeyboardBackspaceIcon color={"action"} />
        </Button>
        <img
          src={Logo}
          style={{
            height: "2rem",
            cursor: "pointer",
            marginLeft: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          onClick={logoClick}
        />
      </Box>
      <Outlet />
    </Box>
  );
};

export default AppLogoBoard;
