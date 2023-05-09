import { FC, MouseEventHandler } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";

import "./ExtraCallForm.scss";

type ExtraCallForm = {
    back: MouseEventHandler;
};

const ExtraCallForm: FC<ExtraCallForm> = ({ back }) => {
    return (
        <div className="extra-call__form-inner">
            <div
                className="extra-call__item"
                onClick={back}
                style={{ margin: "0 auto", marginBottom: "45px" }}
            >
                <HiOutlinePhoneMissedCall />
            </div>
            <div className="extra-call__form-warning">
                Перепроверте свои данные
            </div>
            <form className="extra-call__form">
                <div className="extra-call__form-top">
                    <label htmlFor="name" className="extra-call__form-label">
                        Имя
                        <input
                            name="name"
                            type="text"
                            className="extra-call__form-input input"
                        />
                    </label>
                    <label htmlFor="surname" className="extra-call__form-label">
                        Фамилия
                        <input
                            name="surname"
                            type="text"
                            className="extra-call__form-input input"
                        />
                    </label>
                </div>
                <div className="extra-call__form-bottom">
                    <label htmlFor="text" className="extra-call__form-label">
                        Дата рождения
                        <input
                            name="dateOfBirthday"
                            type="text"
                            className="input"
                            style={{ width: "260px", marginRight: "55px" }}
                        />
                    </label>
                    <label htmlFor="surname" className="extra-call__form-label">
                        Заболевание
                        <input
                            name="surname"
                            type="text"
                            className="input"
                            style={{ width: "380px" }}
                        />
                    </label>
                </div>
            </form>
            <div className="extra-call__form-warning">
                Перепроверьте свой номер
            </div>
            <div
                className="extra-call__form-bottom"
                style={{ justifyContent: "center", gridGap: "25px" }}
            >
                <input
                    name="surname"
                    type="text"
                    className="input"
                    placeholder="UZ +998"
                    style={{ width: "130px" }}
                />
                <input
                    name="surname"
                    type="text"
                    placeholder="90-978-96-79"
                    className="input"
                    style={{ width: "260px" }}
                />
            </div>
            <button className="extra-call__form-btn">Позвонить сейчас</button>
        </div>
    );
};

export default ExtraCallForm;
