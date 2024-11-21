import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const HomeNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor for profile/account
  const [mobileOpen, setMobileOpen] = useState(false); // For mobile drawer toggle
  const isMobile = useMediaQuery('(max-width:768px)'); // To detect mobile devices

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = () => {
    setMobileOpen(!mobileOpen);
  }

  // Mobile menu items
  const drawer = (
    <div className="w-64 h-full p-4">
      <List>
        <ListItem button>
          {/* <ListItemText primary="Home" /> */}
          <ListItemText
          primary={<Link to='/' onClick={handleMenuClick}>Home</Link>}
        />
        </ListItem>
        {/* <ListItem button>
          <ListItemText primary="Shop" />
        </ListItem> */}
        <ListItem button>
          <ListItemText primary={<Link to='/about'>About</Link>} onClick={handleMenuClick} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<Link to='/contactus'>ContactUS</Link>} onClick={handleMenuClick} />
        </ListItem>
      </List>
    </div>
  );

  return (
    // <AppBar position="sticky" sx={{ backgroundColor: '#06402B', boxShadow: 3 }}>
    <AppBar position="sticky" sx={{ backgroundColor: 'black', boxShadow: 3 }}>
      <Toolbar className="flex justify-between items-center">
        {/* Logo Section */}
        
       <Link to='/'> <img src={logo} alt='Logo' className='h-[55px] w-[55px] zoom-in '/></Link>
        {/* <Typography variant="h6" className="text-white font-bold">
          JRS
        </Typography> */}

        {/* Navbar Links (for desktop) */}
        {!isMobile && (
          <div className="flex space-x-6">
            <Button color="inherit" component={Link} to="/">Home</Button>
            {/* <Button color="inherit" component={Link} to="/shop">Shop</Button> */}
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contactus">Contact</Button>
          </div>
        )}

        {/* Right side (Cart & Profile) */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>

          {/* Profile Menu (Desktop) */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>

          {/* Hamburger Menu (Mobile) */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default HomeNavbar;
