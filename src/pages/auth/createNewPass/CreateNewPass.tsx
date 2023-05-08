import { FC } from "react";

import "./CreateNewPass.scss";

const CreateNewPass: FC = () => {
    return (
        <div className="auth">
            <div className="auth__inner">
                <h2
                    className="auth__title"
                    style={{ fontSize: "19px", fontWeight: "600" }}
                >
                    Придумайте новый пароль, содержащий не менее 8 символов
                </h2>
                <form className="auth__form">
                    <input
                        type="text"
                        className="input"
                        placeholder="Введите новый пароль"
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Подтвердите новый пароль"
                    />
                </form>
                <button className="btn btn_red auth__btn">Сохранить</button>
            </div>
        </div>
    );
};

export default CreateNewPass;
