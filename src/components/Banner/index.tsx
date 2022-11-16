import React from "react";
import styles from './variables.module.scss'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerLeft}>
                <img className={styles.image} alt={''} src={'https://cdn-crownx.winmart.vn/images/prod/hang-tuoi-gia-tot_v2-867x400.webp?auto=format&fit=max&w=1080'} />
            </div>
        </div>
    )
}
