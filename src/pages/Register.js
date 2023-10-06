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
  Typography,
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
      await axios.post(
        "https://safeoil-1691d9bd24cd.herokuapp.com/api/auth/register",
        info
      );

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
        <Typography variant="body2" sx={{ mb: 5 }}>
          Personal Information
        </Typography>
        <TextField
          type="text"
          placeholder="First Name"
          id="firstname"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="MIddle Name"
          id="middlename"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          id="lastname"
          onChange={handleChange}
        />
        <Typography variant="body2" sx={{ mb: 5 }}>
          Gender
        </Typography>
        <TextField
          type="text"
          placeholder="Male, Female, Others"
          id="gender"
          onChange={handleChange}
        />
        <Typography variant="body2" sx={{ mb: 5 }}>
          Others
        </Typography>
        <TextField
          type="text"
          placeholder="Nationality"
          id="nationality"
          onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email Address"
          id="email"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Phone Number"
          id="phone"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Address"
          id="address"
          onChange={handleChange}
        />
        <Typography variant="h6" gutterBottom>
          school of oil and gas and business courses, below is the list of
          courses, please write out the one you intent taking
        </Typography>
        <Typography variant="body2" sx={{ mb: 5 }}>
          <ul>
            <li>1. LPG(Cooking gas sales and management)</li>
            <li>2. Construction and installation of LPG storage tank</li>
            <li>3. Oil and Gas investment</li>
            <li>4. Mentorship</li>
          </ul>
        </Typography>
        <TextField
          type="text"
          placeholder="Courses"
          id="courses"
          onChange={handleChange}
          style={{ marginBottom: "26px" }}
        />
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
