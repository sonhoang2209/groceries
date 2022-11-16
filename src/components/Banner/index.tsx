import React from "react";
import styles from './variables.module.scss'
import {SliderCustom} from "./Slider";
import {bannerData} from "./bannerData";

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <SliderCustom data={bannerData} />
        </div>
    )
}
