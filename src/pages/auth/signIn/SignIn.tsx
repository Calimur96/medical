import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../routes/routes";
import "./SignIn.scss";
import doctors from "../../../assets/doctors.png";

const SignIn: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="auth">
            <div className="auth__login">
                <img src={doctors} alt="" />
                <div className="auth__login-inner">
                    <h2 className="auth__title">Вход</h2>
                    <form className="auth__form">
                        <input
                            placeholder="E-mail"
                            type="text"
                            className="input"
                        />
                        <input
                            placeholder="Пароль"
                            type="text"
                            className="input"
                        />
                    </form>
                    <div
                        className="auth__action"
                        onClick={() => navigate(ROUTES.forgotPass)}
                    >
                        Забыли пароль?
                    </div>
                    <button className="btn_red btn">Войти</button>
                    <div
                        className="auth__action"
                        onClick={() => navigate(ROUTES.registration)}
                    >
                        Зарегистрироваться
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
