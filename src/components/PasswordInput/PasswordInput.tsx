import React, { useRef } from "react";

import password from "assets/img/svg/authorization/Lock.svg";
import show from "assets/img/svg/password/show.svg";

import styles from "./PasswordInput.module.scss";

const PasswordInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  const view = (): void => {
    if (inputRef.current?.getAttribute("type") === "password") {
      viewRef.current?.classList.add(`${styles.view}`);
      inputRef.current?.setAttribute("type", "text");
    } else {
      viewRef.current?.classList.remove(`${styles.view}`);
      inputRef.current?.setAttribute("type", "password");
    }
  };

  return (
    <>
      <div className={styles["form-image"]}>
        <img src={password} alt="password" />
      </div>
      <input
        className={styles["form-password"]}
        ref={inputRef}
        type="password"
        placeholder="Password"
      />
      <div ref={viewRef} className={styles["form-show"]} onClick={view}>
        <img src={show} alt="show" />
      </div>
    </>
  );
};

export default PasswordInput;
