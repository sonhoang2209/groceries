import { useCallback, useEffect, useState } from "react";
import styles from "../products/products.module.scss";
import { ListBlog } from "../../components/ListBlog";
import { getNews } from "../../services/news";

const Products = () => {
  const [productList, setProductList] = useState<any>([]);

  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getNews()]).then(([response]) => {
        setProductList(response.data.news);
      });
    } catch (e) {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSituation().then();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h1 className={styles.title}>News</h1>
        <ListBlog data={productList} />
      </div>
    </div>
  );
};

export default Products;
