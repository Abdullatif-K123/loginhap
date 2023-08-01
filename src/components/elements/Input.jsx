import { forwardRef } from "react";
import classes from "./elements.module.css";
// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, id, ...rest }, ref) => {
  return (
    <div className={classes.inputMain}>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...rest} className={classes.inputsection} />
    </div>
  );
});

export default Input;
