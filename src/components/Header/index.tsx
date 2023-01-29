import React from "react";
import styles from "./variables.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import UserBox from "./userBox";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Logo />
          <Menu />
          <UserBox />
        </div>
      </div>
    </div>
  );
};
