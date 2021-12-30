import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h4">Nat's University</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
