import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export interface BlogProps {
  image?: string;
  images?: string;
  title: string;
  link: string;
  content: string;
  dateUpdate: string;
  header?: string;
}
export const CardBlog = ({ data }: { data: BlogProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Link href={data.link || ""}>
          <img
            className={styles.image}
            src={data.image || data.images}
            alt={""}
          />
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.date}>{data.dateUpdate}</p>
        <Link href={data.link || ""}>
          <h3 className={styles.title}>{data.title || data.header}</h3>
        </Link>
        <span className={styles.text}>{data.content}</span>
      </div>
    </div>
  );
};

export const ListBlog = ({ data }: { data: BlogProps[] }) => {
  return (
    <div className={styles.listBlog}>
      {data.map((item, index) => (
        <div className={styles.blog} key={index.toString()}>
          <CardBlog data={item} />
        </div>
      ))}
    </div>
  );
};
