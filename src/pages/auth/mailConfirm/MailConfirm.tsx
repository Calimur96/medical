import { FC, useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../routes/routes";

const MailConfirm: FC = () => {
    const [code, setCode] = useState<string>("");
    const codeInputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];
    const navigate = useNavigate();

    const handleCodeInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
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
    ) => {
        if (e.key === "Backspace" && i > 0 && !code[i]) {
            codeInputRefs[i - 1].current?.focus();
        }
    };

    return (
        <div className="auth">
            <div className="auth__inner">
                <h2
                    className="auth__title"
                    style={{ fontSize: "19px", lineHeight: "23px" }}
                >
                    Введите код который был отправлен вам на почту:
                </h2>
                <p className="auth__mail">Test********@mail.ru</p>
                <div className="auth__code">
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
                <button
                    className="btn btn_red"
                    onClick={() => navigate(ROUTES.map)}
                    disabled={code.length < 4 ? true : false}
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default MailConfirm;
