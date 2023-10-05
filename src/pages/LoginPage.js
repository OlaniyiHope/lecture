import { styled } from "@mui/material/styles";
import { Container, Typography, Divider, Stack, Button } from "@mui/material";

import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const LoginPage = () => {
  return (
    <>
      <StyledRoot>
        <StyledSection>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            <img
              alt="logo"
              style={{
                width: "300px",
              }}
            />
          </Typography>
        </StyledSection>

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Register for your oil and gas class
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {""}
              <Link to="/register">Get started</Link>
            </Typography>

            <Register />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};
export default LoginPage;
