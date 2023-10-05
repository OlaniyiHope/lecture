import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @mui
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  Checkbox,
} from "@mui/material";
import Button from "@mui/material/Button";

import { LoadingButton } from "@mui/lab";
// components

// ----------------------------------------------------------------------
const Register = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [showModal, setShowModal] = useState(false); // State for showing the modal
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to your API endpoint
      await axios.post("http://localhost:4000/api/auth/register", info);

      // Show the success modal
      setShowModal(true);

      // Clear the form fields or perform any other necessary actions
    } catch (err) {
      // Handle registration error
      console.error("Registration failed:", err);
      // You can display an error message to the user if needed
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Navigate to the home page after closing the modal
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="Full Name"
          id="fullname"
          onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <TextField
          type="number"
          placeholder="Phone Number"
          id="phone"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Country"
          id="country"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="City"
          id="city"
          onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleClick}
      >
        Register
      </LoadingButton>

      {/* Success Modal */}
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          Your registration was successful. Do you want to visit our website?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              navigate("/");
              handleCloseModal();
            }}
            color="primary"
          >
            <Link to="/">Yes</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Register;
