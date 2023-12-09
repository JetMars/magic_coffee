import React from "react";

import styles from "./Logo.module.scss";
import logo from "../../assets/img/logo.png";

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.img}>
        <img className={styles[`img_logo`]} src={logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Magic Coffee</h1>
    </div>
  );
};

export default Logo;
