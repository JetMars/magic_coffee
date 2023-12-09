import React from "react";

import arrow from "../../assets/img/arrows/arrow-next.svg";

import styles from "./NextPage.module.scss";

interface IMargin {
  margin: string;
}

const NextPage: React.FC<IMargin> = ({ margin }) => {
  return (
    <button className={`${styles.btn} ${styles[margin]}`}>
      <img className={styles["arrow-next"]} src={arrow} alt="arrow-next" />
    </button>
  );
};

export default NextPage;
