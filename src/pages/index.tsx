import styles from "./variables.module.scss";
import { Banner } from "../components/Banner";
import { ListCard } from "../components/ListCard";
import { HomeBlog } from "../components/HomeBlog";
import { banner, blogListData, defaultData, homeBlockData } from "./homeData";
import React from "react";
import { ListBlog } from "../components/ListBlog";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Drinks Order</title>
      </Helmet>
      <Banner />
      <div className={styles.container}>
        <ListCard cardData={defaultData} banner={banner} />
      </div>
      <HomeBlog data={homeBlockData} />
      <div className={styles.blogs}>
        <h3 className={styles.title}>List Blog</h3>
        <div className={styles.container}>
          <ListBlog data={blogListData} />
        </div>
      </div>
    </div>
  );
}
