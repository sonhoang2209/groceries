import { useCallback, useEffect, useState } from "react";
import styles from "./products.module.scss";
import { Card } from "../../components/Card";
import { getProducts } from "../../services/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { setReduxProducts } from "../../stores/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState<any>(
    useSelector((state: RootState) => state.products.products) || []
  );

  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getProducts()]).then(([response]) => {
        setProductList(response.data.products);
        dispatch(setReduxProducts(response.data.products));
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
        <h1 className={styles.title}>
          Products{" "}
          <div className={styles.boxSearch}>
            <input placeholder="Tên sản phẩm" />
          </div>
        </h1>
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
