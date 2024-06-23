import { Box, Typography, Avatar, Button } from "@mui/material";
import {
  PageContext,
  TestContext,
  TestContextInterface,
  TestInterface,
  pageMap,
} from "../exports";
import { useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("NavBar rendered for the first time.");
  }, []);
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
        height: "12vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Typography variant="button" sx={{ color: "white" }}>
          PrepBooster
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
      <Box>
        {page !== 3 && page !== 4 && <Avatar>VP</Avatar>}
        {page === 3 && test.running === false && (
          <Button
            variant="contained"
            onClick={() => {
              setTest((test: TestInterface) => ({
                ...test,
                running: true,
              }));
              setTimerInterval(
                setInterval(() => {
                  // if (timer === 0) clearInterval(timerInterval);
                  setTimer((prevTime) => {
                    if (prevTime === 0) {
                      setTest(false);

                      return 0;
                    }
                    return prevTime - 1;
                  });
                }, 1000)
              );
            }}
          >
            Start
          </Button>
        )}
        {page === 3 && test.running === true && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography variant="body1" color="white">
              Ends in {timer} min
            </Typography>
            <Button variant="contained">Submit</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
