import { FC } from "react";

import "./RegistrationPage.scss";

const RegistrationPage: FC = () => {
    return (
        <div className="auth">
            <div className="auth__inner">
                <h2 className="auth__title">Регистрация</h2>
                <form className="auth__form">
                    <input
                        type="text"
                        className="auth__input input"
                        placeholder="Номер телефона"
                    />
                    <input
                        type="text"
                        className="auth__input input"
                        placeholder="Эл.почта"
                    />
                    <input
                        type="text"
                        className="auth__input input"
                        placeholder="Введите пароль"
                    />
                    <input
                        type="text"
                        className="auth__input input"
                        placeholder="Повторите пароль"
                    />
                </form>
                {/* <div className="auth__policy">
                    <input
                        type="checkbox"
                        name="check"
                        className="auth__checkbox"
                    />
                    <span>
                        Я ознакомлен(а) и соглашаюсь с&nbsp;
                        <a href="/" className="auth__policy-link">
                            правилами и условиями сайта
                        </a>
                    </span>
                </div> */}
                <button className="btn btn_red auth__btn">Продолжить</button>
            </div>
        </div>
    );
};

export default RegistrationPage;
