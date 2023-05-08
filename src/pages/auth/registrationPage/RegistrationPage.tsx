import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../routes/routes";
import "./RegistrationPage.scss";

const RegistrationPage: FC = () => {
    const navigate = useNavigate();

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
                            правилами и условиями сайтаnavigate
                        </a>
                    </span>
                </div> */}
                <button
                    className="btn btn_red auth__btn"
                    onClick={() => navigate(ROUTES.confirm)}
                >
                    Продолжить
                </button>
            </div>
        </div>
    );
};

export default RegistrationPage;
