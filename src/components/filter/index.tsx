import React from "react";
import style from "./filter.module.scss";
export const Filter: React.FC<{ onChange: (event: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void, defaultValues: any }> = ({ defaultValues, onChange }) => {
    return <div className={style.filter}>
        <div className={style.input_wrapper}>
            <div className={style.label}>Date</div>
            <div className={style.input}>
                <input type="date" defaultValue={defaultValues.date_from} name="date_from" placeholder="from" onChange={onChange} />
            </div>
        </div>
    </div>
}