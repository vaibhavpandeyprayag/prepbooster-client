import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import {
  ArrowForward,
  Backspace,
  KeyboardBackspace,
} from "@mui/icons-material";
import ExamRegImg from "../assets/exam-registration.jpg";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC<{}> = () => {
  const [user, setUser] = useState({ firstName: "Vaibhav" });
  const [exam, setExam] = useState("");
  const navigate = useNavigate();
  let registeredExams: any[] = [{ id: 1, name: "GATE", code: "GATE" }];
  // let registeredExams: any[] = [];
  let recentTests = [
    {
      id: 1,
      name: "Test 1",
      type: "Full Test",
      date: "19-05-2024",
      obtained_marks: 58,
      max_marks: 100,
    },
    {
      id: 2,
      name: "Test 2",
      type: "Full Test",
      date: "15-05-2024",
      obtained_marks: 45,
      max_marks: 100,
    },
    {
      id: 3,
      name: "Test 3",
      type: "Full Test",
      date: "13-05-2024",
      obtained_marks: 39,
      max_marks: 100,
    },
  ];

  const routeToExamRegPage = () => {
    navigate("/user/exam-registration");
  };
  const routeToRecentTestsPage = () => {
    navigate("/user/recent-tests");
  };

  useEffect(() => {
    console.log("Dashboard rendered for the first time.");
    recentTests = [];
  }, []);
  return (
    <Box>
      {registeredExams.length > 0 ? (
        <Box>
          <Box display={"flex"} justifyContent={"end"} p={"1rem"}>
            <Button variant={"contained"} color={"info"}>
              Take Test
            </Button>
          </Box>
          <Card
            sx={{
              p: "1rem",
              mx: "1rem",
              border: "1px solid lightgray",
              bgcolor: "whitesmoke",
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Performance
            </Typography>
            {registeredExams.length > 0 ? (
              <Box sx={{ mt: "1rem" }}>
                <Grid
                  container
                  rowGap={2}
                  columnSpacing={2}
                  sx={{ my: "1rem" }}
                >
                  <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined">
                      <CardContent sx={{ p: "1rem" }}>
                        <Typography color="text.secondary">
                          Tests taken
                        </Typography>
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          2 / 11
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography color="text.secondary">
                          Avg. Marks
                        </Typography>
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          75
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography color="text.secondary">Best</Typography>
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          95
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography color="text.secondary">Worst</Typography>
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          45
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Card sx={{ height: "100%", mt: "1rem" }}>
                  <CardContent sx={{ textAlign: "center", height: "100%" }}>
                    <Typography variant="h3" sx={{ color: "lightgrey" }}>
                      Graph
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <Button variant={"text"} sx={{ textTransform: "none" }}>
                    Take a test to see performance
                  </Button>
                </Box>
              </Box>
            )}
          </Card>
          <Card
            sx={{
              p: "1rem",
              m: "1rem",
              border: "1px solid lightgray",
              bgcolor: "whitesmoke",
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Recent Tests
            </Typography>
            <Grid container columnSpacing={2} rowGap={2} sx={{ mt: "1rem" }}>
              {recentTests.map(test => (
                <Grid item xs={12} sm={12} md={6} lg={3} key={test.id}>
                  <Card sx={{ height: "100px" }}>
                    <CardContent
                      style={{ padding: "1rem" }}
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Grid container sx={{ height: "100%" }}>
                        <Grid item xs={8} sx={{ height: "100%" }}>
                          <Typography variant={"button"}>
                            {test.name}
                          </Typography>
                          <Typography
                            variant={"body2"}
                            fontStyle={"italic"}
                            color={"GrayText"}
                          >
                            {test.type}
                          </Typography>
                          <Typography
                            variant={"body2"}
                            fontStyle={"italic"}
                            color={"GrayText"}
                          >
                            {test.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} textAlign={"end"}>
                          <Typography variant={"h6"}>
                            {test.obtained_marks} / {test.max_marks}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Card sx={{ height: "100px" }}>
                  <CardContent
                    sx={{
                      p: "1rem",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href="#"
                      variant="button"
                      onClick={routeToRecentTestsPage}
                    >
                      See all
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Box>
      ) : (
        <Box
          display={"flex"}
          margin={"2rem 0 0 0"}
          gap={"1rem"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box sx={{ width: { xs: "50%", md: "25%" } }}>
            <img src={ExamRegImg} width={"100%"} alt="Exam Registration" />
          </Box>

          <Typography variant={"h5"} textTransform={"none"} fontWeight={"bold"}>
            Start with registering for an exam
          </Typography>
          <Button
            variant={"contained"}
            sx={{
              color: "primary",
            }}
            onClick={() => routeToExamRegPage()}
          >
            Continue
            <KeyboardBackspace sx={{ ml: "0.5rem", transform: "scaleX(-1)" }} />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DashboardPage;
