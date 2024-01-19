import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <AppBar position="static" style={{ background: 'black' }}>
      <Toolbar className="container py-2">
        <Typography variant="h3">
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            Snake
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
