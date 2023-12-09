import React from "react";

import arrow from "../../assets/img/arrows/arrow-next.svg";

import styles from "./NextPage.module.scss";

interface IMargin {
  margin: Partial<{ mt: string; mr: string; mb: string; ml: string }>;
}

const NextPage: React.FC<IMargin> = (props) => {
  let margin = "0";
  if (props.margin) {
    const { mt = "0", mr = "0", mb = "0", ml = "0" } = props.margin;
    margin = `${mt} ${mr} ${mb} ${ml}`;
    console.log(margin);
  }

  return (
    <button className={styles.btn} style={{ margin: margin }}>
      <img className={styles["arrow-next"]} src={arrow} alt="arrow-next" />
    </button>
  );
};

export default NextPage;
