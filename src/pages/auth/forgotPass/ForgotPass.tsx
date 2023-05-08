import { FC, useState, useRef, ChangeEvent, KeyboardEvent } from "react";

import "./ForgotPass.scss";

const ForgotPass: FC = () => {
    const [code, setCode] = useState<string>("");

    const codeInputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleCodeInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        i: number
    ): void => {
        setCode((code) => {
            const newCode = [...code];
            newCode[i] = e.target.value;
            return newCode.join("");
        });

        if (e.target.value.length > 0 && i < codeInputRefs.length - 1) {
            codeInputRefs[i + 1].current?.focus();
        }
    };

    const handleCodeInputKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        i: number
    ): void => {
        if (e.key === "Backspace" && i > 0 && !code[i]) {
            codeInputRefs[i - 1].current?.focus();
        }
    };

    return (
        <div className="auth">
            <div className="auth__inner">
                <h2 className="auth__title">
                    Как вы хотите восстановить пароль?
                </h2>
                <div className="auth__list">
                    <div className="auth__list-inner">
                        <div className="auth__list-item">
                            <input
                                type="radio"
                                name="checkbox"
                                value="tel"
                                className="auth__input-radio"
                            />
                            <div className="auth__list-data">
                                Через телефон:
                                <span>+7777777</span>
                            </div>
                        </div>
                        <div className="auth__list-item">
                            <input
                                type="radio"
                                name="checkbox"
                                value="mail"
                                className="auth__input-radio"
                            />
                            <div className="auth__list-data">
                                Через эл.почту:
                                <span>example@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="auth__list-data">
                        Введите код, который был отправлен вам на:
                        <span>+7777777</span>
                    </div>
                    <div className="auth__code" style={{ margin: "10px 0" }}>
                        <input
                            type="text"
                            maxLength={1}
                            onChange={(e) => handleCodeInputChange(e, 0)}
                            onKeyDown={(e) => handleCodeInputKeyDown(e, 0)}
                            value={code[0] || ""}
                            ref={codeInputRefs[0]}
                            className="auth__code-input"
                        />
                        <input
                            type="text"
                            maxLength={1}
                            onChange={(e) => handleCodeInputChange(e, 1)}
                            onKeyDown={(e) => handleCodeInputKeyDown(e, 1)}
                            value={code[1] || ""}
                            ref={codeInputRefs[1]}
                            className="auth__code-input"
                        />
                        <input
                            type="text"
                            maxLength={1}
                            onChange={(e) => handleCodeInputChange(e, 2)}
                            onKeyDown={(e) => handleCodeInputKeyDown(e, 2)}
                            value={code[2] || ""}
                            ref={codeInputRefs[2]}
                            className="auth__code-input"
                        />
                        <input
                            type="text"
                            maxLength={1}
                            onChange={(e) => handleCodeInputChange(e, 3)}
                            onKeyDown={(e) => handleCodeInputKeyDown(e, 3)}
                            value={code[3] || ""}
                            ref={codeInputRefs[3]}
                            className="auth__code-input"
                        />
                    </div>
                    <button className="auth__number-request">
                        Отправить код повторно
                    </button>
                </div>
                <button className="btn btn_red auth__btn" disabled>
                    Войти
                </button>
            </div>
        </div>
    );
};

export default ForgotPass;
