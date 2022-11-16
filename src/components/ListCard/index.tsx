import React from "react";
import styles from './variables.module.scss'
import {Card, CardProps} from "../Card";
import Link from "next/link";

export type BannerCardProps = CardProps & {
  link: string
}

export interface ListCardProps {
  cardData: CardProps[]
  banner?: BannerCardProps
}

export const ListCard = ({cardData, banner}: ListCardProps) => {
  return (
    <div className={styles.listCard}>
      {
        banner && (
          <div className={styles.bigItem}>
            <Link href={banner.link}>
              <img className={styles.thumbnail} src={banner.image} alt={''} />
            </Link>
          </div>
        )
      }
      {
        cardData.map((item, index) => (
          <div className={styles.item} key={index.toString()}>
            <Card data={item}/>
          </div>
        ))
      }
    </div>
  )
}
