import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const RecentTestsPage: React.FC<{}> = () => {
  const columnHeaderList: string[] = [
    "Sr.",
    "Name",
    "Type",
    "Date",
    "Marks Obtained",
    "Max. Marks",
    "Percentage (%)",
  ];
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
  return (
    <Box sx={{ p: "1rem" }}>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Recent Tests
      </Typography>
      <TableContainer sx={{ mt: "1rem" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columnHeaderList.map((header, i) => (
                <TableCell key={"header" + i} sx={{ bgcolor: "ActiveCaption" }}>
                  <Typography
                    variant={"body1"}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {recentTests.map((row: any, i) => (
              <TableRow
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "ThreeDFace",
                  },
                }}
              >
                {Object.keys(row).map((column: any, j) => (
                  <TableCell key={column + i}>
                    <Typography variant={"body2"}>{row[column]}</Typography>
                  </TableCell>
                ))}
                <TableCell key={"percentage" + i}>
                  <Typography variant={"body2"}>
                    {(row.obtained_marks * 100) / row.max_marks}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentTestsPage;
