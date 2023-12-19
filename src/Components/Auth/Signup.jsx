import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Signup = ({ handleCloseAuthModal, onSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (fieldName, value) => {
    // Update the corresponding field in the formData state
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      // Build the request body
      const requestBody = {
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
      };

      // Perform the POST request
      const response = await fetch(
        'https://yoga-app-server.onrender.com/api/user/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();

        // Store the JWT token in the local storage
        localStorage.setItem('token', data.token);

        console.log('Registration successful!');
        onSignup(); // Trigger the signup action
        // You can perform additional actions here, such as redirecting the user
        handleCloseAuthModal();
      } else {
        // Handle errors
        console.error('Registration failed:', response.statusText);
        // You can display an error message to the user or perform other error-handling actions
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      // You can handle other types of errors here
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
        label="Email"
        color="secondary"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Phone Number"
        type="password"
        color="secondary"
        value={formData.phoneNumber}
        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        color="secondary"
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleRegister}
        sx={{ backgroundColor: '#0F1B4C' }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Signup;


