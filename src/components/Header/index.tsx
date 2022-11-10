import React from "react";
import styles from './variables.module.scss'
import { Button } from "../Buttons";
import { AccountIcon, CartIcon } from "../../images";
import { SearchInput } from "./Search";
import ThemeToggle from "../ThemeToggle";

export const Header = () => {
    return (
        <div className={styles.header}>
           <div className={styles.container}>
               <div className={styles.headerInner}>
                   <div className={styles.logo}>
                       logo
                   </div>
                   <SearchInput />
                   <ThemeToggle />
                   <div className={styles.buttons}>
                       <Button text={'Cart'} icon={CartIcon} />
                       <Button text={'Account'} icon={AccountIcon} />
                   </div>
               </div>
           </div>
        </div>
    )
}