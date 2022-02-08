import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";

const Navbarcomp = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <SportsCricketIcon style={{ color: "white" }}></SportsCricketIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRICKET NEWS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarcomp;
