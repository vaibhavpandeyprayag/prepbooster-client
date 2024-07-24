import { Label } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Grow,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Snackbar,
  Typography,
} from "@mui/material";
import HeroImg from "../assets/exam-registration.jpg";
import { useState } from "react";
import "../App.css";
import QRCodeSample from "./../assets/qr_code_sample.jpg";

const ExamRegistrationPage: React.FC<{}> = () => {
  const [examId, setExamId] = useState<number | null>(null);
  const [packageTypeId, setPackageTypeId] = useState<number | null>(null);
  const [payModeId, setPayModeId] = useState<number | null>(null);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "error" | "info" | "success" | "warning";
    payload: string;
  }>({ show: false, type: "success", payload: "" });
  const examList = [
    { id: 1, name: "GATE" },
    { id: 2, name: "NEET" },
  ];
  const registeredExamsList: any[] = [{ id: 1, name: "GATE" }];
  const [qrModal, setQrModal] = useState(false);

  const continueToPayment = () => {
    if (examId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select an exam",
      });
      return;
    } else if (packageTypeId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select a validity package type",
      });
      return;
    } else if (payModeId == null) {
      setAlert({
        show: true,
        type: "warning",
        payload: "Select payment mode",
      });
      return;
    }

    setQrModal(true);
  };
  return (
    <Box>
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
            <img src={HeroImg} width={"100%"} alt={"Exam Registration"} />
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
              {examList.map((exam, i) => (
                <MenuItem key={"exam" + i} value={exam.id}>
                  {exam.name}
                </MenuItem>
              ))}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "75%", lg: "50%" },
            }}
          >
            <FormControl>
              <Button
                variant={"contained"}
                color={"success"}
                onClick={continueToPayment}
              >
                Pay
              </Button>
            </FormControl>
            {packageTypeId != null && (
              <Box sx={{ wdith: "100%" }}>
                <Typography variant={"caption"} fontStyle={"italic"}>
                  Price
                </Typography>
                <Typography variant={"h5"} fontWeight={"bold"} color={"green"}>
                  Rs. 5000
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <Snackbar
        open={alert?.show}
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

      <Modal
        open={qrModal}
        onClose={(e, reason) => {
          if (reason == "backdropClick" || reason == "escapeKeyDown") return;
          setQrModal(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: "1rem",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                width={"100%"}
                height={"100%"}
                style={{ maxWidth: "200px" }}
                src={QRCodeSample}
                alt={"QR Code"}
              />
              <Box
                sx={{ display: "flex", gap: "0.5rem", alignItems: "baseline" }}
              >
                <Typography variant={"caption"} fontStyle={"italic"}>
                  Pay within
                </Typography>

                <Typography variant={"body1"}>00:25 sec</Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                padding: "0.5rem",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography variant={"h6"}>
                {examList.filter(exam => exam.id == examId)[0]?.name}
              </Typography>

              <Typography variant={"caption"}>Package: </Typography>

              <Typography variant={"subtitle2"}>3 months</Typography>
              <Typography variant={"caption"}>Total payable price:</Typography>
              <Typography variant={"h5"} fontWeight={"bold"} color={"green"}>
                Rs. 5000
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              height={"auto"}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
              }}
            >
              <Button
                variant={"contained"}
                color={"error"}
                onClick={() => setQrModal(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default ExamRegistrationPage;
