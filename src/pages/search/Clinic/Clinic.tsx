import { FC } from "react";

import StarRating from "../../../components/starRating/StarRating";

import avatar from "../../../assets/avatar.png";

const Clinic: FC = () => {
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
                        Название: <span></span>
                    </li>
                    <li>
                        Страна: <span></span>
                    </li>
                    <li>
                        Город: <span></span>
                    </li>
                    <li>
                        Методы лечения: <span></span>
                    </li>
                    <li>
                        Профилактика заболеваний: <span></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Clinic;
