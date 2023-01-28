import { useCallback, useEffect, useState } from "react";
import { getProductById } from "../../../services/products";
import styles from "../products.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import Link from "next/link";

const Product = () => {
  const [productDetail, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);

  const onChangeQuantity = (type: "plus" | "minus") => {
    setQuantity(type === "plus" ? quantity + 1 : quantity - 1);
  };

  const fetchSituation = useCallback(async () => {
    try {
      await Promise.all([getProductById(1)]).then(([response]) => {
        setProduct(response.data.product[0]);
      });
    } catch (e) {}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSituation().then();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!productDetail) return null;

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <div className={styles.box}>
            <div className={styles.thumbnail}>
              <Link href={`/products/${productDetail.slug}`}>
                <img
                  className={styles.image}
                  src={productDetail.image}
                  alt={""}
                />
              </Link>
            </div>
            <p>{productDetail.description}</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.title}>{productDetail.product_name}</h1>
            <div className={styles.boxPrice}>
              <span>
                {productDetail.price?.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <div className={styles.boxNumber}>
                <button
                  className={styles.iconButton}
                  onClick={() => onChangeQuantity("minus")}
                  disabled={quantity === 1}
                >
                  <img src={"/images/icons/minus.svg"} alt={""} />
                </button>
                <span>{quantity}</span>
                <button
                  className={styles.iconButton}
                  onClick={() => onChangeQuantity("plus")}
                >
                  <img src={"/images/icons/plus.svg"} alt={""} />
                </button>
              </div>
            </div>
            <div className={styles.boxOptions}>
              <div className={styles.boxOptionHeader}>CHỌN SIZE (BẮT BUỘC)</div>
              <div className={styles.boxOptionContent}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
