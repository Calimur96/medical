import { FC } from "react";

import "./UserInfo.scss";

const UserInfo: FC = () => {
    return (
        <div className="user-info">
            <input type="text" className="rounded-input" placeholder="Имя" />
            <input
                type="text"
                className="rounded-input"
                placeholder="Фамилия"
            />
            <input
                type="text"
                className="rounded-input"
                placeholder="Дата рождение"
            />
            <input
                type="text"
                className="rounded-input"
                placeholder="Интерес.заболевание"
            />
            <input type="text" className="rounded-input" placeholder="Страна" />
            <input type="text" className="rounded-input" placeholder="Город" />
            <input type="text" className="rounded-input" placeholder="Адрес" />
            <input type="text" className="rounded-input" placeholder="Логин" />
        </div>
    );
};

export default UserInfo;
