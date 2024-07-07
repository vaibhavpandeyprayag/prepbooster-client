import { Label } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Typography,
} from "@mui/material";
import HeroImg from "../assets/exam-registration.jpg";
import { useState } from "react";
import "../App.css";

const ExamRegistrationPage: React.FC<{}> = () => {
  const [examId, setExamId] = useState<number | null>(null);
  const [packageTypeId, setPackageTypeId] = useState<number | null>(null);
  const [payModeId, setPayModeId] = useState<number | null>(null);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "error" | "info" | "success" | "warning";
    payload: string;
  }>({ show: false, type: "success", payload: "" });
  const registeredExamsList: any[] = [{ id: 1, name: "GATE" }];

  const continueToPayment = () => {
    if (examId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select an exam",
      });
    } else if (packageTypeId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select a validity package type",
      });
    } else if (payModeId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select payment mode",
      });
    }
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignContent: "center",
        margin: "5rem 0 0 0",
      }}
    >
      <Grid
        className="fade-in"
        item
        md={6}
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Box sx={{ width: { xs: "75%", lg: "50%" } }}>
          <img src={HeroImg} width={"100%"} />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        bgcolor={"Background"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ alignItems: { xs: "center", md: "start" } }}
      >
        <Typography variant={"h5"} fontWeight={"bold"}>
          Register for an exam
        </Typography>
        <Typography
          variant={"body2"}
          fontSize={"12px"}
          color={"InfoText"}
          margin={"0 0 2rem 0"}
        >
          After registration, you can take tests for the chosen exam
        </Typography>
        <FormControl sx={{ width: { xs: "75%", lg: "50%" } }}>
          <InputLabel id="exam_select_label">Exam</InputLabel>
          <Select
            id={"exam_select"}
            label={"Exam"}
            labelId={"exam_select_label"}
            sx={{ margin: "0 0 1rem 0" }}
            value={examId?.toString()}
            onChange={(e: SelectChangeEvent) =>
              setExamId(Number(e.target.value))
            }
          >
            <MenuItem value={1}>GATE</MenuItem>
            <MenuItem value={2}>NEET</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: { xs: "75%", lg: "50%" } }}>
          <InputLabel id="package_select_label">Package validity</InputLabel>
          <Select
            id={"package_select"}
            label={"Package validity"}
            labelId={"package_select_label"}
            sx={{ margin: "0 0 1rem 0" }}
            value={packageTypeId?.toString()}
            onChange={(e: SelectChangeEvent) =>
              setPackageTypeId(Number(e.target.value))
            }
          >
            <MenuItem value={1}>3 Months</MenuItem>
            <MenuItem value={2}>6 Months</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: { xs: "75%", lg: "50%" } }}>
          <InputLabel id="pay_mode_select_label">Payment mode</InputLabel>
          <Select
            id={"pay_mode_select"}
            label={"Payment mode"}
            labelId={"pay_mode_select_label"}
            sx={{ margin: "0 0 2rem 0" }}
            value={payModeId?.toString()}
            onChange={(e: SelectChangeEvent) =>
              setPayModeId(Number(e.target.value))
            }
          >
            <MenuItem value={1}>PayTM UPI</MenuItem>
            <MenuItem value={2}>Google UPI</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button
            variant={"contained"}
            color={"success"}
            onClick={continueToPayment}
          >
            Continue
          </Button>
        </FormControl>
      </Grid>
      <Grid item md={2}></Grid>
      <Snackbar
        open={alert?.show == true}
        autoHideDuration={3000}
        onClose={() => setAlert({ ...alert, show: false })}
      >
        <Alert
          severity={alert?.type}
          variant={"filled"}
          onClose={() => setAlert({ ...alert, show: false })}
        >
          {alert?.payload}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ExamRegistrationPage;
