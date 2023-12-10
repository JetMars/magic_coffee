import React from "react";

import arrow from "../../assets/img/arrows/arrow-left.svg";

import styles from "./BackPage.module.scss";

const BackPage: React.FC = () => {
  return (
    <button className={styles.btn}>
      <img className={styles["arrow-back"]} src={arrow} alt="arrow-back" />
    </button>
  );
};

export default BackPage;
