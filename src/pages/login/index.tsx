import { useCallback, useEffect, useState } from "react";
import styles from "../variables.module.scss";

const Shops = () => {
  const [productList, setProductList] = useState<any>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>login</h1>
        <div className={styles.listShop}></div>
      </div>
    </div>
  );
};

export default Shops;
