import React from "react";
import styles from './variables.module.scss'

interface ButtonProps {
    text: string
    onClick?: () => void
    icon?: {src: string, [key: string]: number | string}
}

export const Button = ({text, onClick, icon}: ButtonProps) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {
                icon && (
                    <div className={styles.icon}>
                        <img alt={''} src={icon.src} width={24} height={24} />
                    </div>
                )
            }
            <span className={styles.text}>
                {text}
            </span>
        </div>
    )
}