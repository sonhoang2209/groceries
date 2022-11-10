import React from "react";
import styles from './variables.module.scss'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerLeft}>
                <img className={styles.image} alt={''} src={'https://cdn-crownx.winmart.vn/images/prod/hang-tuoi-gia-tot_v2-867x400.webp?auto=format&fit=max&w=1080'} />
            </div>
            <div className={styles.bannerRight}>
                <div className={styles.bannerItem}>
                    <img className={styles.image}  alt={''} src={'https://cdn-crownx.winmart.vn/images/prod/banner_web-online-hang-tuoi-gia-tot_614x397.webp?auto=format&fit=max&w=384'} />
                </div>
                <div className={styles.bannerItem}>
                    <img className={styles.image}  alt={''} src={'https://cdn-crownx.winmart.vn/images/prod/sanieu-deal_614-x-397.webp?auto=format&fit=max&w=384'} />
                </div>
            </div>
        </div>
    )
}