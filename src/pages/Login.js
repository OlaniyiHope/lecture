import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components

// ----------------------------------------------------------------------
const Login = () => {
  //   const [credentials, setCredentials] = useState({
  //     email: undefined,
  //     password: undefined,
  //   });
  //   const [showPassword, setShowPassword] = useState(false);

  //   const { loading, error, dispatch } = useContext(AuthContext);

  //   const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  //   };

  //   const handleClick = async (e) => {
  //     e.preventDefault();
  //     dispatch({ type: "LOGIN_START" });
  //     try {
  //       const res = await axios.post(
  //         "https://adzenon-8a494e17f9e2.herokuapp.com/api/auth/login",
  //         credentials
  //       );
  //       if (res.data.isAdmin) {
  //         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

  //         navigate("/dashboard/app");
  //       } else {
  //         dispatch({
  //           type: "LOGIN_FAILURE",
  //           payload: { message: "You are not allowed!" },
  //         });
  //       }
  //     } catch (err) {
  //       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //     }
  //   };
  return (
    <>
      <Stack spacing={3}>
        <TextField type="text" placeholder="email address" id="email" />

        <TextField
          label="Password"
          type="password"
          placeholder="password"
          id="password"
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgotpassword?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Login
      </LoadingButton>
    </>
  );
};
export default Login;
