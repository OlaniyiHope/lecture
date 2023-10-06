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
  Radio,
  FormControlLabel,
} from "@mui/material";
import Button from "@mui/material/Button";

import { LoadingButton } from "@mui/lab";
// components

// ----------------------------------------------------------------------
const Register = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({
    courses: [], // Initialize courses as an empty array
  });
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

  const handleCourseChange = (e) => {
    const { id, value } = e.target;

    // Check if the course is already in the array, if yes, remove it, else add it
    setInfo((prev) => ({
      ...prev,
      courses: prev.courses.includes(value)
        ? prev.courses.filter((course) => course !== value)
        : [...prev.courses, value],
    }));
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

        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          onChange={(e) =>
            handleChange({ target: { id: "gender", value: "male" } })
          }
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
          onChange={(e) =>
            handleChange({ target: { id: "gender", value: "female" } })
          }
        />
        <FormControlLabel
          value="other"
          control={<Radio />}
          label="Other"
          onChange={(e) =>
            handleChange({ target: { id: "gender", value: "other" } })
          }
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
          School of oil and gas and business courses
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes(
                "LPG(Cooking Gas) Sales and Management"
              )}
              onChange={handleCourseChange}
              value="LPG(Cooking Gas) Sales and Management"
            />
          }
          label="LPG(Cooking Gas) Sales and Management"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes(
                "Construction and Installation of LPG (cooking gas)"
              )}
              onChange={handleCourseChange}
              value="Construction and Installation of LPG (cooking gas)"
            />
          }
          label="Construction and Installation of LPG (cooking gas)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes(
                "Oil and Gas Investment/Financial Freedom"
              )}
              onChange={handleCourseChange}
              value="Oil and Gas Investment/Financial Freedom"
            />
          }
          label="Oil and Gas Investment/Financial Freedom"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes("Mentorship")}
              onChange={handleCourseChange}
              value="Mentorship"
            />
          }
          label="Mentorship"
        />
      </Stack>
      <Typography variant="body2" sx={{ mt: 5 }}>
        How do you want to take the class?
      </Typography>

      <FormControlLabel
        value="online"
        control={<Radio />}
        label="online"
        onChange={(e) =>
          handleChange({ target: { id: "class", value: "online" } })
        }
      />
      <FormControlLabel
        value="offline"
        control={<Radio />}
        label="offline"
        onChange={(e) =>
          handleChange({ target: { id: "class", value: "offline" } })
        }
      />

      <Typography variant="body2" sx={{ mt: 5, mb: 5 }}>
        I hearby declare that the information provided in this form is accurate
        and complete to the best of my knowledge.
      </Typography>

      <TextField
        type="date"
        placeholder="Date"
        id="date"
        onChange={handleChange}
      />

      <Typography variant="body2" sx={{ mb: 5 }}>
        Thank you for choosing Safe Oil and Gas. We look forward to welcoming
        you to our program and helping you achieve your career goals in the oil
        and gas industry
      </Typography>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleClick}
      >
        Register
      </LoadingButton>
      <Typography variant="h6" gutterBottom style={{ color: "red" }}>
        Company account details
      </Typography>
      <Typography gutterBottom>
        Account name: 24/7 safe oil & gas global limited
      </Typography>
      <Typography variant="p" gutterBottom>
        Bank: zenith bank
      </Typography>
      <Typography variant="p" gutterBottom>
        Account Number: 1017238268
      </Typography>
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
