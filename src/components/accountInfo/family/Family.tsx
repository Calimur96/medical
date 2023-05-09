import { FC } from "react";

import "./Family.scss";

const Family: FC = () => {
    return (
        <ul className="family-list">
            <li className="family-list__item">
                Ольга Олеговна - <span> пациент</span>
            </li>
        </ul>
    );
};

export default Family;
