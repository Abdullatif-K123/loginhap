import React from "react";
import classes from "./elements.module.css";
import { Button } from "@mui/material";
const Buttons = ({ title, type }) => {
  return (
    <button variant="contained" type={type} className={classes.btnLogin}>
      {title}
    </button>
  );
};

export default Buttons;
