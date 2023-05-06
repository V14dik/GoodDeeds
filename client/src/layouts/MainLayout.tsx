import React from "react";
import Header from "@/components/Header/Header";
import styles from "./mainLayout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
