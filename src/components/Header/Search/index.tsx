import React from "react";
import styles from './variables.module.scss'
import {SearchIcon} from "../../../images";

interface ButtonProps {
    onClick?: () => void
}

export const SearchInput = ({onClick}: ButtonProps) => {
    return (
        <div className={styles.search} onClick={onClick}>
            <input className={styles.inputSearch} placeholder={'Search'} />
            <div className={styles.searchButton} onClick={onClick}>
                <img src={SearchIcon.src} className={styles.icon} alt={''} />
            </div>
        </div>
    )
}