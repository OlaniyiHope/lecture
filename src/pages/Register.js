import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  Select,
  MenuItem,
} from "@mui/material";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const Register = () => {
  const [info, setInfo] = useState({
    courses: [],
    gender: "",
    nationality: "",
    classType: "",
    address: "",
    phone: "",
    email: "",
    firstname: "",
    middlename: "", // Added middlename field
    lastname: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [id]: id === "classType" ? value.toLowerCase() : value,
    }));
  };

  useEffect(() => {
    console.log("Current state:", info);
  }, [info]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Check if classType and courses are provided
      if (!info.classType || info.courses.length === 0) {
        console.error("Class Type and Courses are required.");
        return;
      }

      // Wait for the state to be updated
      await new Promise((resolve) => setInfo(info, resolve));
    } catch (err) {
      console.error("Setting state failed:", err);
      return;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Now, info state is updated, and you can use it for the API call
        await axios.post(
          "https://safeblog-b04f2f2a940f.herokuapp.com/api/registerschool",
          info
        );
        setShowModal(true);
      } catch (err) {
        console.error("Registration failed:", err);
      }
    };

    fetchData();
  }, [info]); // Run this effect whenever the 'info' state changes

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleCourseChange = (e) => {
    const { name, checked } = e.target;
    let updatedCourses = [...info.courses];

    if (checked) {
      updatedCourses.push(name);
    } else {
      updatedCourses = updatedCourses.filter((course) => course !== name);
    }

    setInfo((prev) => ({
      ...prev,
      courses: updatedCourses,
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
          placeholder="Middle Name" // Corrected placeholder
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
        <Select
          label="Gender"
          value={info.gender}
          onChange={(e) =>
            handleChange({ target: { id: "gender", value: e.target.value } })
          }
          sx={{ mb: 2 }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
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
          type="number"
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
        <span style={{ fontWeight: "700" }}>
          (Choose any of the courses you are interested in)
        </span>
        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes(
                "LPG(Cooking Gas) Sales and Management"
              )}
              onChange={handleCourseChange}
              name="LPG(Cooking Gas) Sales and Management"
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
              name="Construction and Installation of LPG (cooking gas)"
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
              name="Oil and Gas Investment/Financial Freedom"
            />
          }
          label="Oil and Gas Investment/Financial Freedom"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={info.courses.includes("Mentorship")}
              onChange={handleCourseChange}
              name="Mentorship"
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
          handleChange({ target: { id: "classType", value: "online" } })
        }
      />
      <FormControlLabel
        value="offline"
        control={<Radio />}
        label="offline"
        onChange={(e) =>
          handleChange({ target: { id: "classType", value: "offline" } })
        }
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
