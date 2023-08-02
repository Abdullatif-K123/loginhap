import React from "react";
import classes from "./elements.module.css";
import { Button } from "@mui/material";
const Buttons = ({ title }) => {
  return (
    <button variant="contained" className={classes.btnLogin}>
      {title}
    </button>
  );
};

export default Buttons;
