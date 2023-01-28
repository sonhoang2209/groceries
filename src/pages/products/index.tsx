import { useEffect, useState } from "react";
import styles from "./products.module.scss";
import { Card } from "../../components/Card";

const Products = () => {
  const [productList, setProductList] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:4000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.productListWrap}>
          {productList.map((product: any, index: number) => {
            return (
              <div className={styles.item} key={index}>
                <Card data={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
