import React, { ReactNode } from "react";
import {Header} from "../components/Header";

export declare type LayoutProps = {
    children: ReactNode
}

export const Layout = ({children} : LayoutProps) => {
    return (
        <div className={'layout'}>
            <Header/>
            <div className={'content'}>
                {children}
            </div>
        </div>
    )
}
