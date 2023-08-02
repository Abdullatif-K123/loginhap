import React from "react";
import classes from "./elements.module.css";
import { Button } from "@mui/material";
const Buttons = ({ title, type }) => {
  return (
    <Button variant="contained" type={type} className={classes.btnLogin}>
      {title}
    </Button>
  );
};

export default Buttons;
