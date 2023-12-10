import React from "react";

import { BackPage, NextPage } from "components";

import email from "assets/img/svg/authorization/Message.svg";
import password from "assets/img/svg/authorization/Lock.svg";

import styles from "./AuthorizationPage.module.scss";

const AuthorizationPage: React.FC = () => {
  return (
    <section className={styles.authorization}>
      <BackPage />
      <h1 className={styles["authorization-title"]}>Sign in</h1>
      <h2 className={styles["authorization-greeting"]}>Welcome back</h2>

      <form className={styles.form} action="#">
        <div className={styles["form-wrap"]}>
          <div className={styles["form-image"]}>
            <img src={email} alt="email" />
          </div>
          <input type="email" placeholder="Email address" />
        </div>
        <div className={styles["form-wrap"]}>
          <div className={styles["form-image"]}>
            <img src={password} alt="password" />
          </div>
          <input type="password" placeholder="Password" />
        </div>
      </form>
      <div className={styles["password-restore"]}>
        <a href="#" className={styles["restore-link"]}>
          Forgot Password?
        </a>
      </div>
      <NextPage margin="authorization-page" />
      <div className={styles["sign-up"]}>
        New member?
        <a href=""> Sign up</a>
      </div>
    </section>
  );
};

export default AuthorizationPage;
