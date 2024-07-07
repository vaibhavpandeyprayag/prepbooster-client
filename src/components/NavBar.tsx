import { Box, Typography, Avatar, Button, Input } from "@mui/material";
import {
  PageContext,
  TestContext,
  TestContextInterface,
  TestInterface,
  pageMap,
} from "../exports";
import { FormEvent, useContext, useEffect, useState } from "react";
import Logo from "../assets/app_logo_transparent_2.png";
import { Outlet, useNavigate } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  let title = "";
  const { page, setPage } = useContext(PageContext);
  const { test, setTest } = useContext<TestContextInterface>(TestContext);
  const [timer, setTimer] = useState(5);
  const [timerInterval, setTimerInterval] = useState<any>();
  if (page != null) {
    if (page == 3) {
      title = `${pageMap[page]}: `;
    } else if (page == 4) {
      title = `${pageMap[page]}: `;
    } else title = pageMap[page];
  }

  const [text, setText] = useState("");

  useEffect(() => {
    console.log("NavBar rendered for the first time.");
  });
  useEffect(() => {
    console.log("NavBar rendered due to page change.");
  }, [page]);
  useEffect(() => {
    console.log("NavBar rendered due to test.");
    if (timer == 0) {
      clearInterval(timerInterval);
      console.log("Test got over.");
    }
  }, [test]);
  useEffect(() => {
    console.log("NavBar rendered due to timer ticking.");
  }, [timer]);

  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/home");
  };
  return (
    <Box sx={{ backgroundColor: "rgb(211 211 211 / 25%)" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"10vh"}
        boxShadow={"5"}
        px={"1rem"}
        sx={{ backgroundColor: "Background" }}
      >
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
    </Box>
  );
};

export default NavBar;
