import { Label } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const DashboardPage: React.FC<{}> = () => {
  const [user, setUser] = useState({ firstName: "Vaibhav" });
  const [exam, setExam] = useState("");

  useEffect(() => {
    console.log("Dashboard rendered for the first time.");
  }, []);
  return (
    <Container maxWidth={false} disableGutters sx={{ p: "1rem" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        👋 Hello {user.firstName}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={1} sx={{ p: "1rem" }}>
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

            {exam != "" && (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="text.secondary">
                        Tests taken
                      </Typography>
                      <Typography variant="h4" sx={{ textAlign: "end" }}>
                        2 / 11
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="text.secondary">Avg. Marks</Typography>
                      <Typography variant="h4" sx={{ textAlign: "end" }}>
                        75
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="text.secondary">Best</Typography>
                      <Typography variant="h4" sx={{ textAlign: "end" }}>
                        95
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="text.secondary">Worst</Typography>
                      <Typography variant="h4" sx={{ textAlign: "end" }}>
                        45
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
        {exam != "" && (
          <Grid item xs={12} sm={8}>
            <Paper elevation={1} sx={{ p: "1rem" }}>
              <Typography variant="subtitle1">Performance Graph</Typography>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h3" sx={{ color: "lightgrey" }}>
                    Graph
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
