import React, { useState } from "react";
import classes from "./login.module.css";
import hapsterLogo from "/public/assets/img/LOGO-hapster-quadri-cmjn.png";
import Image from "next/image";
import Input from "../elements/Input";
import Buttons from "../elements/Button";
import global from "/public/assets/svg/global.svg";
import arrowDown from "/public/assets/svg/arrow.svg";
import { Formik, Form } from "formik";
import schema from "@/validations/login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
const LoginForm = () => {
  //DropDown languages selection implements
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("English");
  var open = Boolean(anchorEl);
  console.log(open);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Changing the language handler
  const handleClickLang = (lang) => {
    setLanguage(lang);
    handleClose();
  };
  return (
    <div className={classes.container}>
      <div className={classes.boxContainer}>
        <div className={classes.headSection}>
          <Image
            src={hapsterLogo}
            width={199}
            height={93}
            alt="hapster logo"
            className={classes.logoIcon}
          />
          <div
            className={classes.languageChange}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div>
              <Image
                src={global}
                width="auto 17"
                height="auto 15"
                alt="global hapster"
              />
              <p>{language}</p>
            </div>
            <Image
              src={arrowDown}
              className={`${classes.iconArrow} ${open ? classes.rotate : null}`}
              alt="arrow_down"
            />
          </div>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() => {
                handleClickLang("English");
              }}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClickLang("French");
              }}
            >
              French
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClickLang("Spanish");
              }}
            >
              Spanish
            </MenuItem>
          </Menu>
        </div>
        <Formik
          validationSchema={schema}
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className={classes.loginBox}>
              <p>Login</p>
              <Form className={classes.loginContainer} onSubmit={handleSubmit}>
                <Input
                  label={"Username or email"}
                  id={"name"}
                  error={errors.usernameOrEmail}
                  type={"text"}
                  name={"usernameOrEmail"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.usernameOrEmail}
                  touched={touched.usernameOrEmail}
                />
                {touched.usernameOrEmail && errors.usernameOrEmail && (
                  <p>{errors.usernameOrEmail}</p>
                )}
                <Input
                  label={"Password"}
                  id={"password"}
                  error={errors.password}
                  type={"password"}
                  name={"password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  touched={touched.password}
                />
                {touched.password && <p>{errors.password}</p>}
                <Buttons title={"Login"} type={"submit"} />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
