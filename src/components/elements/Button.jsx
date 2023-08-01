import React from "react";
import classes from "./elements.module.css";
import { Button } from "@mui/material";
const Buttons = () => {
  return (
    <Button variant="contained" className={classes.btnLogin}>
      Login
    </Button>
  );
};

export default Buttons;
