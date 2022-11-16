import React, { ReactNode } from "react";
import {Header} from "../components/Header";
import styles from './layout.module.scss'
import {useRouter} from "next/router";
import { Helmet } from 'react-helmet'

export declare type LayoutProps = {
    children: ReactNode
}

export const Layout = ({children} : LayoutProps) => {
  const router = useRouter();
  const slug = router.query.slug;
    return (
        <div className={styles.layout}>
          <Helmet>
            <title>{slug ? `${slug} - ` : ''} Drinks Order</title>
          </Helmet>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
