import React from "react";
import styles from "./card.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setProductDetail } from "../../stores/productsSlice";

export interface CardProps {
  image: string;
  name?: string;
  price: number;
  id: number | string;
  slug: string;
  localize?: string;
  product_name?: string;
}

export const Card = ({ data }: { data: CardProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onChange = () => {
    router.push(`/products/${data.slug}`);
    dispatch(setProductDetail(data));
  };
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <div onClick={onChange}>
          <img className={styles.image} src={data.image} alt={""} />
        </div>
      </div>
      <div className={styles.content}>
        <div onClick={onChange}>
          <h3 className={styles.name}>{data.product_name || data.name}</h3>
        </div>
        <span className={styles.price}>
          {data.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>
    </div>
  );
};
