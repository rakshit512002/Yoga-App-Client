import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppState } from '../../../Context/AppContext';
import MenuItem from '@mui/material/MenuItem';

const EnrollForm = ({ handleCloseEnrollModal }) => {
  const { setAlert } = AppState();

  const [formData, setFormData] = useState({
    id: '',
    payNow: false,
    batch: '6-7 AM', // Default batch selection
    enrollDate: new Date().toISOString().split('T')[0],
    // Add more fields as needed
  });

  const handleSubmit = async () => {
    try {
      // Retrieve the user token from local storage
      const userToken = localStorage.getItem('token');

      // Build the request body
      const requestBody = {
        enrollDate: formData.enrollDate,
        batch: formData.batch,
        payNow: formData.payNow,
      };

      // Perform the POST request with the user token in the headers
      const response = await fetch('https://yoga-app-server.onrender.com/api/user/enroll/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`, // Include the user token in the headers
        },
        body: JSON.stringify(requestBody),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Enrollment successful!');
        // You can perform additional actions here if needed
      } else {
        // Handle errors
        console.error('Enrollment failed:', response.statusText);
        // You can display an error message to the user or perform other error-handling actions
      }
    } catch (error) {
      console.error('Error during enrollment:', error.message);
      // You can handle other types of errors here
    }

    // Example: Display an alert
    setAlert({
      open: true,
      message: 'Enrollment Successful!',
      type: 'success',
    });

    // Close the enrollment modal
    handleCloseEnrollModal();
  };


  const handleInputChange = (fieldName, value) => {
    // Update the corresponding field in the formData state
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
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
      {/* <TextField
        variant="outlined"
        type="text"
        label="User ID"
        color="secondary"
        value={formData.id}
        onChange={(e) => handleInputChange('id', e.target.value)}
        fullWidth
      /> */}
      <TextField
        variant="outlined"
        type="date"
        label="Enroll Date"
        color="secondary"
        value={formData.enrollDate}
        onChange={(e) => handleInputChange('enrollDate', e.target.value)}
        fullWidth
      />
      <TextField
        select
        variant="outlined"
        label="Batch"
        color="secondary"
        value={formData.batch}
        onChange={(e) => handleInputChange('batch', e.target.value)}
        fullWidth
      >
        {['6-7 AM', '7-8 AM', '8-9 AM', '5-6 PM'].map((batchOption) => (
          <MenuItem key={batchOption} value={batchOption}>
            {batchOption}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px', // Adjust the gap as needed
        }}
      >
        <label>Pay Now</label>
        <input
          type="checkbox"
          checked={formData.payNow}
          onChange={(e) => handleInputChange('payNow', e.target.checked)}
        />
      </Box>
      {/* Add more fields as needed */}
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        sx={{ backgroundColor: '#0F1B4C' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default EnrollForm;
