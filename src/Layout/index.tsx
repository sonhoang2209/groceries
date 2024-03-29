import React, { ReactNode } from "react";
import { Header } from "../components/Header";
import styles from "./layout.module.scss";
import Footer from "../components/Footer";

export declare type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
