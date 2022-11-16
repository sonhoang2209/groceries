import React from "react";
import styles from './styles.module.scss'

export interface HomeBlogProps {
  image:string
  title: string
  link: string
  content: string
}

export const HomeBlog = ({data} : {data: HomeBlogProps}) => {
  return (
    <div className={styles.homeBlog}>
      <div className={styles.blogContent}>
        <div className={styles.container}>
          <div className={styles.left}>
            <img alt={''} src={data.image} />
          </div>
          <div className={styles.right}>
            <p className={styles.title}><img alt={''} src={data.title} /></p>
            <p className={styles.text}>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
