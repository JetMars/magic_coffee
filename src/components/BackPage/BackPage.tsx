import React from "react";

import { Link } from "react-router-dom";

import arrow from "assets/img/arrows/arrow-left.svg";

import styles from "./BackPage.module.scss";

const BackPage: React.FC = () => {
  return (
    <Link to="/" className={styles.btn}>
      <img className={styles["arrow-back"]} src={arrow} alt="arrow-back" />
    </Link>
  );
};

export default BackPage;
