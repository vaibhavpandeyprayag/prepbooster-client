import {
  Box,
  Button,
  Container,
  Link,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Signup: React.FC<{}> = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Sign up
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              fullWidth
              id="firstName"
              label="First Name *"
              sx={{ bgcolor: "white" }}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              fullWidth
              id="lastName"
              label="Last Name"
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              fullWidth
              id="email"
              label="Email *"
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              fullWidth
              id="password"
              label="Password *"
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: { xs: 0, sm: 3 }, mb: { xs: 0, sm: 2 } }}
            >
              Sign up
            </Button>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Link
              href="#"
              variant="body2"
              sx={{ mt: { xs: 0, sm: 4 }, float: "right" }}
            >
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signup;
