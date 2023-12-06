import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DashboardPage from "./DashboardPage";
import ProfilePage from "./ProfilePage";
import TestPage from "./TestPage";
import PerformancePage from "./PerformancePage";

const UserScreen: React.FC<{}> = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{}}>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/performance/:id" element={<PerformancePage />} />
      </Routes>
    </Container>
  );
};

export default UserScreen;
