import { FC } from "react";
import { IoIosMore } from "react-icons/io";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import Layout from "../../components/Layout/Layout";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import StarRating from "../../components/starRating/StarRating";

import avatar from "../../assets/avatar.png";
import "./ClinicInformation.scss";

const ClinicInformatiom: FC = () => {
    return (
        <Layout>
            <div className="clinic-information">
                <HeaderNavBar>
                    <div className="clinic-information__header">
                        <StarRating rating={2} maxRating={5} disabledStar />
                    </div>
                    <IoIosMore size={30} color="#fff" />
                </HeaderNavBar>
                <div className="container">
                    <div className="clinic-information__inner">
                        <div
                            className="search-page__item clinic-information__item-box"
                            style={{ height: "340px" }}
                        >
                            <h2 className="clinic-information__title">
                                Клиника: <span></span>
                            </h2>
                            <div className="clinic-information__content">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="search-page__item-img"
                                />
                                <ul className="clinic-information__item-ul">
                                    <li className="clinic-information__item-li">
                                        Все специалисты: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Изучено заболеваний: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Всего наблюдалось: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Все публикации: <span>7</span>
                                    </li>
                                </ul>
                                <ul className="clinic-information__item-ul">
                                    <li className="clinic-information__item-li">
                                        Страна: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Город: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Часовой пояс: <span>7</span>
                                    </li>
                                    <li className="clinic-information__item-li">
                                        Время работы: <span>7</span>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn btn_red clinic-information__btn">
                                Написать
                            </button>
                        </div>
                        <h2
                            style={{
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: 32,
                            }}
                        >
                            Cпециалисты (7):
                        </h2>
                        <div className="clinic-information__rating-boxes">
                            <div className="clinic-information__rating-box search-page__item">
                                <div className="clinic-information__rating-box-content">
                                    <div className="clinic-information__user-rating">
                                        <img
                                            src={avatar}
                                            alt=""
                                            className="search-page__item-img"
                                        />
                                        <div className="clinic-information__rating">
                                            <div className="clinic-information__rating_up">
                                                <BsArrowUp />
                                                <span>+17</span>
                                            </div>
                                            <div className="clinic-information__rating_lose">
                                                <span>-5</span>
                                                <BsArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clinic-information__rating-box-data">
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Имя Фамилия:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                Сергей
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Cпециальность:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                Психолог
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Онлайн методы лечения:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                14
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Оффлайн методы лечения:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                15
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn btn_red"
                                    style={{ margin: "0 auto" }}
                                >
                                    Перейти/записаться
                                </button>
                            </div>
                            <div className="clinic-information__rating-box search-page__item">
                                <div className="clinic-information__rating-box-content">
                                    <div className="clinic-information__user-rating">
                                        <img
                                            src={avatar}
                                            alt=""
                                            className="search-page__item-img"
                                        />
                                        <div className="clinic-information__rating">
                                            <div className="clinic-information__rating_up">
                                                <BsArrowUp />
                                                <span>+17</span>
                                            </div>
                                            <div className="clinic-information__rating_lose">
                                                <span>-5</span>
                                                <BsArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clinic-information__rating-box-data">
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Имя Фамилия:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                Сергей
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Cпециальность:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                Психолог
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Онлайн методы лечения:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                14
                                            </p>
                                        </div>
                                        <div className="clinic-information__rating-box-item">
                                            <p className="subtitle">
                                                Оффлайн методы лечения:
                                            </p>
                                            <p className="clinic-information__rating-box-text">
                                                15
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn btn_red"
                                    style={{ margin: "0 auto" }}
                                >
                                    Перейти/записаться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ClinicInformatiom;
