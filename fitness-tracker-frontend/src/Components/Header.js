import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '../styles/Header.css';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
      };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <AppBar className="Header" position="static">
            <Toolbar className='Nav-bar'>
                <Typography variant="h4" className="Header-logo">
                    The Workout Zone
                </Typography>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    onClick={handleMenu}
                    >
                    <div className='User-Icon'>
                        <AccountCircle />
                    </div>
                </IconButton>

                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

            </Toolbar>
        </AppBar>
    )
}

export default Header;