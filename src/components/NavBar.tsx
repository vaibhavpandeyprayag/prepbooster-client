import {
  Box,
  Typography,
  Avatar,
  Button,
  Input,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Menu,
  Divider,
} from "@mui/material";
import { MouseEvent, useContext, useEffect, useState } from "react";
import Logo from "../assets/app_logo_transparent_2.png";
import { useNavigate } from "react-router-dom";
import { AccountCircle, KeyboardArrowDown } from "@mui/icons-material";

const NavBar: React.FC<{}> = () => {
  const examList = [
    { id: 1, name: "GATE" },
    { id: 2, name: "NEET" },
    { id: 3, name: "CAT" },
  ];
  const [examId, setExamId] = useState(examList[0].id);
  const selectedExamName = examList.filter(exam => exam.id == examId)[0].name;
  const navigate = useNavigate();
  const logoClick = () => navigate("/home");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    console.log("NavBar rendered");
  });

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
        <Box sx={{ display: "flex" }}>
          <Button
            id={"registered-exam-button"}
            variant={"text"}
            onClick={(e: MouseEvent<HTMLElement>) =>
              setAnchorEl(e.currentTarget)
            }
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant={"caption"}
              color={"gray"}
              sx={{ textTransform: "none", fontStyle: "italic" }}
            >
              Selected exam:
            </Typography>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant={"body2"}
                color={"GrayText"}
                fontWeight={"bold"}
              >
                {selectedExamName}
              </Typography>
              <KeyboardArrowDown />
            </span>
          </Button>
          <Menu
            id={"registered-exam-menu"}
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {examList.map((exam, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  setExamId(exam.id);
                  setAnchorEl(null);
                }}
                disableRipple
              >
                {exam.name}
              </MenuItem>
            ))}
          </Menu>
          <Button variant={"text"} sx={{ textTransform: "none" }}>
            <AccountCircle fontSize={"large"} sx={{ mr: "0.5rem" }} />
            Vaibhav
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
