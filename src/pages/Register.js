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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
const initialState = {
  firstname: "",
  middlename: "",
  lastname: "",
  gender: "",
  nationality: "",
  email: "",
  date: "",
  phone: "",
  address: "",

  classes: "",
  courses: [],
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const {
    firstname,
    middlename,
    lastname,
    gender,
    nationality,
    email,
    date,
    phone,
    address,
    classes,
    courses,
  } = formData;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstname,
      middlename,
      lastname,
      gender,
      nationality,
      email,
      date,
      phone,
      address,
      classes,
      courses,
    };
    try {
      await axios.post(
        `https://safeblog-b04f2f2a940f.herokuapp.com/api/auth/school`,
        {
          ...formData,
        }
      );

      // navigate("/dashboard/admin");
      toast.success("User successfully created");
      setShowModal(true);
    } catch (err) {
      console.error("Error registering student:", err);
      toast.error("Unable to create user");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleCourseChange = (e) => {
    const { name, checked } = e.target;
    let updatedCourses = [...formData.courses];

    if (checked) {
      updatedCourses.push(name);
    } else {
      updatedCourses = updatedCourses.filter((course) => course !== name);
    }

    setFormData((prev) => ({
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
          name="firstname"
          label="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <TextField
          name="middlename"
          label="Middle Name"
          value={formData.middlename}
          onChange={handleChange}
        />
        <TextField
          name="lastname"
          label="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <Typography variant="body2" sx={{ mb: 5 }}>
          Gender
        </Typography>
        <Select
          label="Gender"
          value={formData.gender}
          onChange={(e) =>
            handleChange({ target: { name: "gender", value: e.target.value } })
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
          name="nationality" // Change id to name
          value={formData.nationality}
          onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email Address"
          name="email" // Change id to name
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Phone Number"
          name="phone" // Change id to name
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Address"
          name="address" // Change id to name
          value={formData.address}
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
              checked={formData.courses.includes(
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
              checked={formData.courses.includes(
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
              checked={formData.courses.includes(
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
              checked={formData.courses.includes("Mentorship")}
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
          handleChange({ target: { name: "classes", value: "online" } })
        }
      />
      <FormControlLabel
        value="offline"
        control={<Radio />}
        label="offline"
        onChange={(e) =>
          handleChange({ target: { name: "classes", value: "offline" } })
        }
      />
      <Typography variant="body2" sx={{ mb: 5 }}>
        Thank you for choosing Safe Oil and Gas. We look forward to welcoming
        you to our program and helping you achieve your career goals in the oil
        and gas industry
      </Typography>
      <Button
        fullWidth
        size="large"
        type="submit"
        onClick={handleSubmit}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Register
      </Button>
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
      <ToastContainer />
    </>
  );
};

export default Register;
