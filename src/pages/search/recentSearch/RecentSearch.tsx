import { FC } from "react";

import "./RecentSearch.scss";
import avatar from "../../../assets/avatar.png";

const RecentSearch: FC = () => {
    return (
        <div className="recent-search">
            <div className="recent-search__inner">
                {[1, 2, 3, 4, 5].map((item) => (
                    <div className="search-page__item">
                        <div className="search-page__item-content">
                            <img
                                src={avatar}
                                alt=""
                                className="search-page__item-img"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSearch;
