import React from "react";
import styles from "./card.module.scss";
import Link from "next/link";

export interface CardProps {
  image: string;
  name: string;
  price: number;
  id: string;
  slug: string;
  localize?: string;
}

export const Card = ({ data }: { data: CardProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Link href={`/products/${data.slug}`}>
          <img className={styles.image} src={data.image} alt={""} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link href={`/products/${data.slug}`}>
          <h3 className={styles.name}>{data.localize || data.name}</h3>
        </Link>
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
