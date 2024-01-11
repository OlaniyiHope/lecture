import { styled } from "@mui/material/styles";
import { Container, Typography, Divider, Stack, Button } from "@mui/material";

import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import logs from "./on.png";
import Nav from "./Nav";
import Footer from "./Footer";

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
      <Nav />
      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            <img
              alt="logo"
              src={logs}
              style={{ width: "50px", margin: "auto", marginBottom: "10px" }}
            />
            <Typography variant="h6" gutterBottom>
              Oil and gas program enrolment form
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Please complete the following form to enroll in our Oil and Gas
              program. All fields are mandatory
            </Typography>

            <Register />
          </StyledContent>
        </Container>
      </StyledRoot>
      <Footer />
    </>
  );
};
export default LoginPage;
