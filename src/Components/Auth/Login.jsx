// Login.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = ({ handleCloseAuthModal, onLogin }) => {
  // State to hold email and password
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // Access the email and password from the state
    const { email, password } = formData;

    // Make a POST request to the server
    try {
      const response = await fetch('https://yoga-app-server.onrender.com/api/user/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Store the JWT token in the local storage
        localStorage.setItem('token', data.token);

        // console.log("Locally saved token - " + localStorage.token);

        // Handle successful login
        console.log('Login successful');
        // Close the modal and perform any additional actions (e.g., onLogin callback)
        handleCloseAuthModal();
        if (onLogin) {
          onLogin();
        }
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        color="secondary"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        color="secondary"
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        sx={{ backgroundColor: '#0F1B4C' }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
