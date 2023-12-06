import { Avatar, Box, Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";

const MainScreen: React.FC<{}> = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{}}>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Container>
  );
};

export default MainScreen;
