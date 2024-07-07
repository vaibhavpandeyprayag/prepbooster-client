import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const UserScreen: React.FC<{}> = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default UserScreen;
