import {
  Box,
  Card,
  CardContent,
  Container,
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
import { PageContext } from "../exports";

const DashboardPage: React.FC<{}> = () => {
  const { page, setPage } = useContext(PageContext);
  const [user, setUser] = useState({ firstName: "Vaibhav" });
  const [exam, setExam] = useState("");

  let recentTests: any[] = [
    { testName: "Test 1" },
    { testName: "Test 2" },
    { testName: "Test 3" },
    { testName: "Test 4" },
    { testName: "Test 5" },
  ];

  useEffect(() => {
    console.log("Dashboard rendered for the first time.");
    setPage(1);
    recentTests = [];
  }, []);
  return (
    <Container maxWidth={false} disableGutters>
      <Typography variant="h5" sx={{ my: 2 }}>
        👋 Hello {user.firstName}
      </Typography>
      <Box sx={{ minHeight: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            mb: "1rem",
            p: "1rem",
            color: "white",
            background:
              "linear-gradient(90deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 100%)",
          }}
        >
          Performance
        </Typography>
        <Grid
          container
          columnSpacing={2}
          sx={{ p: "1rem", minHeight: "30vh", height: "auto" }}
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
                  onChange={(e) => setExam(e.target.value)}
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
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
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
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          75
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography color="text.secondary">Best</Typography>
                        <Typography variant="h5" sx={{ textAlign: "end" }}>
                          95
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
      </Box>
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
          {recentTests.map((test) => (
            <Grid item xs={12} md={4} lg={3}>
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
    </Container>
  );
};

export default DashboardPage;
