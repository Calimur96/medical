import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./CenterInfo.scss";
import user from "../../assets/user-avatar.png";

const CenterInfo: FC = () => {
    return (
        <div className="center-info">
            <div className="center-info__inner">
                <div className="center-info__box">
                    <img
                        src={user}
                        alt="center img"
                        className="center-info__img user-img_small"
                    />

                    <div className="center-info__name">
                        <h2 className="center-info__title">Название</h2>
                        <p className="center-info__subtitle">
                            Изучено заболеваний
                        </p>
                    </div>
                </div>
                <ul className="center-info__stats">
                    <li className="center-info__stats-item">
                        Наблюдалось: <span>300</span>
                    </li>
                    <li className="center-info__stats-item">
                        Лечилось: <span>300</span>
                    </li>
                    <li className="center-info__stats-item">
                        Вылечилось: <span>300</span>
                    </li>
                    <li className="center-info__stats-item">
                        Кол-во специалистов: <span>300</span>
                    </li>
                </ul>
                <button className="btn btn_light_red center-info__btn">
                    Выбрать
                </button>
                <IoIosArrowForward className="center-info__arrow" />
            </div>
        </div>
    );
};

export default CenterInfo;
