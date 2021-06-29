import React from "react";
import style from "./header.module.scss";
export const Header: React.FC = () => {
    return <div className={style.header}>
        <div className={style.title}>Pollution Data</div>
        <div className={style.sub_heading}>City : India, Kochi</div>
    </div>
}