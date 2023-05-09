import { FC } from "react";

import "./ProfileProtect.scss";

const ProfileProtect: FC = () => {
    return (
        <div className="profile-protect">
            <input
                type="text"
                className="rounded-input"
                style={{ width: "500px" }}
                placeholder="Эл. Почта"
            />
            <input
                type="text"
                className="rounded-input"
                style={{ width: "500px" }}
                placeholder="Номер телефона"
            />
        </div>
    );
};

export default ProfileProtect;
