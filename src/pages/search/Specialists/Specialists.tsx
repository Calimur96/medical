import { FC } from "react";

import StarRating from "../../../components/starRating/StarRating";

import avatar from "../../../assets/avatar.png";

const Specialists: FC = () => {
    return (
        <div
            className="search-page__item"
            style={{ height: "355px", padding: "10px 60px" }}
        >
            <div
                className="search-page__item-content"
                style={{ justifyContent: "unset" }}
            >
                <img src={avatar} alt="" className="search-page__item-img" />
                <div className="search-page__item-rating">
                    <StarRating rating={2} maxRating={5} disabledStar />
                </div>
                <ul className="search-page__ul">
                    <li>
                        Специальность: <span></span>
                    </li>
                    <li>
                        Страна: <span></span>
                    </li>
                    <li>
                        Город: <span></span>
                    </li>
                    <li>
                        Место работы: <span></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Specialists;
