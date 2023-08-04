import React, { useEffect, useState } from "react";
import Image from "next/image";
import warning from "/public/assets/svg/warning.svg";
import cancel from "/public/assets/svg/add.svg";
import classes from "./elements.module.css";
import { useTranslation } from "react-i18next";
const SneakBar = (props) => {
  const [waiting, setWaiting] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(true);
    }, [3000]);

    return () => clearTimeout(timer);
  }, [props]);
  const { t } = useTranslation();

  return (
    <div
      className={`${classes.sneakBar} ${
        waiting ? classes.sneakBarHidden : null
      }`}
    >
      <Image src={warning} className={classes.iconWarning} alt="warning" />
      <p>{t("login_error")}</p>
      <Image src={cancel} className={classes.iconCancel} alt="cancel alt" />
    </div>
  );
};

export default SneakBar;
