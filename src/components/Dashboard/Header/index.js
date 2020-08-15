import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const menuId = 'primary-search-account-menu';

const Header = (props) => {
  const { classes, name } = props;
  console.log(name);
  const [anchorEl , setAnchorEl] = useState(null);
     

  const handleProfileMenuOpen = e => {
    setAnchorEl(
      e.currentTarget
    );
  };

  const handleMenuClose = () => {
     setAnchorEl(
      null,
    );
  };

  const renderMenu = () => {
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    );
  };

  const handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  };

  
    
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu()}
      </div>
    );
  
}



export default withStyles(styles)(Header);