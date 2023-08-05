import React, { useState, useEffect } from "react";
import classes from "./login.module.css";
import hapsterLogo from "/public/assets/img/LOGO-hapster-quadri-cmjn.png";
import Image from "next/image";
import Input from "../elements/Input";
import Buttons from "../elements/Button";
import global from "/public/assets/svg/global.svg";
import arrowDown from "/public/assets/svg/arrow.svg";
import { Formik, Form } from "formik";
import schema from "@/validations/login";
import { Menu, MenuItem, Fade, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslation } from "react-i18next";
import SneakBar from "../elements/SneakBar";
import { signIn, signOut, useSession } from "next-auth/react";
const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [waiting, setWaiting] = useState(null);
  //DropDown languages selecting implementation
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("English");

  var open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false);
    }, [4000]);
    return () => clearTimeout(timer);
  }, [waiting]);
  //Changing the language handler
  const handleClickLang = (lang) => {
    setLanguage(lang);
    lang === "English"
      ? i18n.changeLanguage("en")
      : lang === "Spanish"
      ? i18n.changeLanguage("es")
      : i18n.changeLanguage("fr");
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
            className={classes.menuLogin}
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
          {waiting && <SneakBar start={"starting"} />}
        </div>
        <Formik
          validationSchema={schema}
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);

            const url = `http://staging-hsp.com:3000/api/v1/oauth/user/login?email=${values.usernameOrEmail}&password=${values.password}`;
            try {
              const response = await axios.get(url);
              router.replace("/home");
              console.log(response);
            } catch (error) {
              console.error(error);
              setWaiting(true);
            }
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
              <p>{t("login")}</p>
              <Form className={classes.loginContainer} onSubmit={handleSubmit}>
                <Input
                  label={t("email")}
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
                  label={t("password")}
                  id={"password"}
                  error={errors.password}
                  type={"password"}
                  name={"password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  touched={touched.password}
                />
                {touched.password && errors.password && (
                  <p>{errors.password}</p>
                )}
                <Buttons title={t("login")} />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
