import styles from "./variables.module.scss";
import { Banner } from "../components/Banner";
import { ListCard } from "../components/ListCard";
import { HomeBlog } from "../components/HomeBlog";
import { banner, blogListData, defaultData, homeBlockData } from "./homeData";
import React, { useCallback, useEffect } from "react";
import { ListBlog } from "../components/ListBlog";
import { useDispatch } from "react-redux";
import { getProducts } from "../services/products";
import { setReduxProducts } from "../stores/productsSlice";
import { getNews } from "../services/news";
import { getReduxNews } from "../stores/newsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getProducts(), getNews()]).then(
        ([response, newsRes]) => {
          dispatch(setReduxProducts(response.data.products));
          dispatch(getReduxNews(newsRes.data.news));
        }
      );
    } catch (e) {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSituation().then();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.home}>
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
