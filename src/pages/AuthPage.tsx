import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "../components/Signup";
import ErrorPage from "./ErrorPage";
import Login from "../components/Login";
import { Box } from "@mui/material";
import Logo from "../assets/app_logo_transparent_2.png";

const AuthPage: React.FC<{}> = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ backgroundColor: "rgb(211 211 211 / 25%)" }}>
      {(location.pathname == "/auth/signup" ||
        location.pathname == "/auth/login") && (
        <Box
          height={"10vh"}
          boxShadow={"5"}
          sx={{ backgroundColor: "Background" }}
        >
          <img
            src={Logo}
            height={"100%"}
            style={{
              paddingLeft: "1rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          />
        </Box>
      )}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </Box>
  );
};

export default AuthPage;
