// AuthModal.js
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Route, useNavigate } from 'react-router-dom'; // Use useNavigate

import Login from './Login';
import Signup from './Signup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  minWidth: 300,
  bgcolor: 'background.paper',
  border: '2px solid #0F1B4C',
  borderRadius: '10px',
  boxShadow: 24,
  p: 0,
};

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleOpenAuthModal = (tabValue) => {
    if (!isAuthenticated) {
      setOpen(true);
      setValue(tabValue);
    }
  };

  const handleCloseAuthModal = () => setOpen(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    handleCloseAuthModal();
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    handleCloseAuthModal();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAnchorEl(null);
    navigate('/');
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleDashboardClick = () => {
    // Redirect to the profile page
    navigate('/profile'); // Use navigate instead of push
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <IconButton
            color="primary"
            onClick={handleDropdownClick}
            sx={{ margin: '0 8px' }}
          >
            Welcome, [UserName] <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
          >
            <MenuItem onClick={handleDashboardClick}>
              Dashboard
            </MenuItem>
            <MenuItem onClick={handleDropdownClose}>
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpenAuthModal(0)}
          >
            Login / SignUp
          </Button>
        </div>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseAuthModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AppBar
              position="static"
              sx={{ backgroundColor: 'transparent', color: '#fff' }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{ borderRadius: 10 }}
                aria-label="Auth tabs"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Login handleCloseAuthModal={handleCloseAuthModal} onLogin={handleLogin} />
            )}
            {value === 1 && (
              <Signup handleCloseAuthModal={handleCloseAuthModal} onSignup={handleSignup} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AuthModal;
