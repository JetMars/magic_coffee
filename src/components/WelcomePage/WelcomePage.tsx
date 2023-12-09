import React from "react";

import Logo from "../Logo/Logo";

import styles from "./WelcomePage.module.scss";
import NextPage from "../NextPage/NextPage";

const WelcomePage: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles["logo-wrap"]}>
        <Logo />
      </div>
      <h2 className={styles.title}>Feel yourself like a barista!</h2>
      <div className={styles.descr}>Magic coffee on order.</div>
      <div className={styles.dots}>
        <div className={styles["dot-active"]}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <NextPage margin={{ mt: "8rem", mr: "4.7rem", mb: "5rem" }} />
    </section>
  );
};

export default WelcomePage;
