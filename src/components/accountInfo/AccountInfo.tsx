import { ChangeEvent, FC, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";

import UserInfo from "./userInfo/UserInfo";
import ProfileProtect from "./profileProtect/ProfileProtect";
import Family from "./family/Family";

import avatar from "../../assets/avatar.png";
import "./AccountInfo.scss";

const AccountInfo: FC = () => {
    const [isSelect, setIsSelect] = useState<string>("");

    const handleFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files[0]);
            const formData = new FormData();

            formData.append("file", e.target.files[0]);
        }
    };

    return (
        <div className="account-info">
            <div className="account-info__inner">
                <div className="account-info__profile">
                    <div className="account-info__img-wrapper">
                        <img
                            src={avatar}
                            alt=""
                            className="account-info__img"
                        />
                        <div className="input__wrapper">
                            <input
                                name="file"
                                type="file"
                                id="input__file"
                                className="input__file"
                                onChange={handleFileLoad}
                                accept="image/*,.png,.jpg"
                            />
                            <label
                                htmlFor="input__file"
                                className="input__file-button"
                            >
                                <span className="input__file-icon-wrapper">
                                    <AiOutlineDownload size={25} />
                                </span>
                                <span className="input__file-button-text">
                                    Выберите файл
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="account-info__btns">
                        <button className="account-info__btn">
                            Подписки
                            <SlArrowRight />
                        </button>
                        <button className="account-info__btn">
                            Сохраненное
                            <SlArrowRight />
                        </button>
                        <button className="account-info__btn">
                            Ведущий центр
                            <SlArrowRight />
                        </button>
                        <button className="account-info__btn">
                            Покупки
                            <SlArrowRight />
                        </button>
                    </div>
                </div>
                <div className="account-info__options">
                    <button
                        className="account-info__option"
                        onClick={() => setIsSelect("main")}
                        onDoubleClick={() => setIsSelect("")}
                    >
                        Основное:
                        <SlArrowRight
                            className={`${
                                isSelect === "main"
                                    ? "account-info__option_active"
                                    : ""
                            }`}
                        />
                    </button>
                    {isSelect === "main" && <UserInfo />}
                    <button
                        className="account-info__option"
                        onClick={() => setIsSelect("tarif")}
                        onDoubleClick={() => setIsSelect("")}
                    >
                        Тариф:
                        <SlArrowRight
                            className={`${
                                isSelect === "tarif"
                                    ? "account-info__option_active"
                                    : ""
                            }`}
                        />
                    </button>
                    {isSelect === "tarif" && <h2>Тариф</h2>}
                    <button
                        className="account-info__option"
                        onClick={() => setIsSelect("protect")}
                        onDoubleClick={() => setIsSelect("")}
                    >
                        Защита профиля:
                        <SlArrowRight
                            className={`${
                                isSelect === "protect"
                                    ? "account-info__option_active"
                                    : ""
                            }`}
                        />
                    </button>
                    {isSelect === "protect" && <ProfileProtect />}
                    <button
                        className="account-info__option"
                        onClick={() => setIsSelect("family")}
                        onDoubleClick={() => setIsSelect("")}
                    >
                        Моя семья:
                        <SlArrowRight
                            className={`${
                                isSelect === "family"
                                    ? "account-info__option_active"
                                    : ""
                            }`}
                        />
                    </button>
                    {isSelect === "family" && <Family />}
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
