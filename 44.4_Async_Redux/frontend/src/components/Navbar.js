import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  

  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="inherit" >Blogly</Button>
          <Button component={Link} to="new" color="inherit" >New Post</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;