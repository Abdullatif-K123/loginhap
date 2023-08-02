import React, { useRef } from "react";
import classes from "./login.module.css";
import hapsterLogo from "/public/assets/svg/logo.svg";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Input from "../elements/Input";
import Buttons from "../elements/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import global from "/public/assets/svg/global.svg";
import arrowDown from "/public/assets/svg/arrow.svg";
const LoginForm = () => {
  const inputNRef = useRef(null);
  const inputPRef = useRef(null);
  return (
    <div className={classes.container}>
      <div className={classes.boxContainer}>
        <div className={classes.headSection}>
          <Image
            src={hapsterLogo}
            width="auto (182px)"
            height="65.1px"
            alt="hapster logo"
          />
          <div className={classes.languageChange}>
            <div>
              <Image
                src={global}
                width="auto 17"
                height="auto 15"
                alt="global hapster"
              />
              <p>English</p>
            </div>
            <Image
              src={arrowDown}
              className={classes.iconArrow}
              alt="arrow_down"
            />
          </div>
        </div>
        <div className={classes.loginBox}>
          <p>Login</p>
          <div className={classes.loginContainer}>
            <Input
              label={"Username or email"}
              id={"name"}
              ref={inputNRef}
              type={"text"}
            />
            <Input
              label={"Password"}
              id={"password"}
              ref={inputPRef}
              type={"password"}
            />
            <div className={classes.rememberForget}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.Checkbox}
                    size="small"
                    style={{ borderRadius: "59px" }}
                  />
                }
                label={<p className={classes.remember}>Remember me</p>}
              />
              <p>Forgot your password?</p>
            </div>
            <Buttons title={"Login"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
