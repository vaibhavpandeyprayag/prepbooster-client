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
  Modal,
  Paper,
  Select,
  Slide,
  Typography,
  Zoom,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../exports";
import { ArrowForward } from "@mui/icons-material";
import ExamRegImg from "../assets/exam-registration.jpg";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC<{}> = () => {
  const { page, setPage } = useContext(PageContext);
  const [user, setUser] = useState({ firstName: "Vaibhav" });
  const [exam, setExam] = useState("");
  const navigate = useNavigate();
  // let registeredExams: any[] = [{id: 1, name: "GATE", code: "GATE"}]
  let registeredExams: any[] = [];
  let recentTests: any[] = [
    { testName: "Test 1" },
    { testName: "Test 2" },
    { testName: "Test 3" },
  ];

  const routeToExamRegPage = () => {
    navigate("/user/exam-registration");
  };

  useEffect(() => {
    console.log("Dashboard rendered for the first time.");
    setPage(1);
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
              minHeight: "100%",
              p: "1rem",
              m: "1rem",
              border: "1px solid lightgray",
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Performance
            </Typography>
            {registeredExams.length > 0 ? (
              <Grid
                container
                columnSpacing={2}
                sx={{ minHeight: "30vh", height: "auto", pt: "1rem" }}
              >
                <Grid item xs={12} md={5} lg={4} sx={{ minHeight: "100%" }}>
                  <Paper elevation={1} sx={{ p: "1rem", height: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel id="ageSelectLabel">Select exam</InputLabel>
                      <Select
                        labelId="ageSelectLabel"
                        id="demoSimpleSelect"
                        value={exam}
                        label="Select exam"
                        onChange={e => setExam(e.target.value)}
                      >
                        <MenuItem value={"gate"}>GATE</MenuItem>
                      </Select>
                    </FormControl>

                    {exam !== "" && (
                      <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                          <Card variant="outlined">
                            <CardContent>
                              <Typography color="text.secondary">
                                Tests taken
                              </Typography>
                              <Typography
                                variant="h5"
                                sx={{ textAlign: "end" }}
                              >
                                2 / 11
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Card variant="outlined">
                            <CardContent>
                              <Typography color="text.secondary">
                                Avg. Marks
                              </Typography>
                              <Typography
                                variant="h5"
                                sx={{ textAlign: "end" }}
                              >
                                75
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Card variant="outlined">
                            <CardContent>
                              <Typography color="text.secondary">
                                Best
                              </Typography>
                              <Typography
                                variant="h5"
                                sx={{ textAlign: "end" }}
                              >
                                95
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Card variant="outlined">
                            <CardContent>
                              <Typography color="text.secondary">
                                Worst
                              </Typography>
                              <Typography
                                variant="h5"
                                sx={{ textAlign: "end" }}
                              >
                                45
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    )}
                  </Paper>
                </Grid>

                <Grid item xs={12} md={7} lg={8} sx={{ minHeight: "100%" }}>
                  <Paper elevation={1} sx={{ p: "1rem", height: "100%" }}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent sx={{ textAlign: "center", height: "100%" }}>
                        <Typography variant="h3" sx={{ color: "lightgrey" }}>
                          Graph
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              </Grid>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <Button variant={"text"} sx={{ textTransform: "none" }}>
                    Take a test to see performance
                    <ArrowForward sx={{ ml: "1rem" }} />
                  </Button>
                </Box>
              </Box>
            )}
          </Card>
          <Box sx={{ mt: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                p: "1rem",
                color: "white",
                background:
                  "linear-gradient(90deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 100%)",
              }}
            >
              Recent Tests
            </Typography>
            <Grid container spacing={2} sx={{ p: "1rem" }}>
              {recentTests.map(test => (
                <Grid item xs={12} md={4} lg={3} key={test.id}>
                  <Card>
                    <CardContent>{test.testName}</CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={12} md={4} lg={3}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Link href="#" variant="button">
                      See all
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
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
            <img src={ExamRegImg} width={"100%"} />
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
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DashboardPage;
