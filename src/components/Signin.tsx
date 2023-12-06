import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const Signin: React.FC<{}> = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Sign in
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField name="email" fullWidth id="email" label="Email *" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              fullWidth
              id="password"
              label="Password *"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: { xs: 0, sm: 3 }, mb: { xs: 0, sm: 2 } }}
            >
              Sign in
            </Button>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Link
              href="#"
              variant="body2"
              sx={{ mt: { xs: 0, sm: 4 }, float: "right" }}
            >
              Create an account.
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signin;
