import { Outlet, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "../assets/app_logo_transparent_2.png";

const AppLogoBoard: React.FC<{}> = () => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/home");
  };
  return (
    <Box sx={{ backgroundColor: "rgb(211 211 211 / 25%)" }}>
      <Box
        display={"flex"}
        alignItems={"center "}
        height={"10vh"}
        boxShadow={"5"}
        sx={{ backgroundColor: "Background" }}
      >
        <img
          src={Logo}
          style={{
            height: "50%",
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
