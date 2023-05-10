import { FC } from "react";
import { useMenu } from "../../store/menu";

import "./Header.scss";

const Header: FC = (): JSX.Element => {
    const { setIsActive } = useMenu();

    return (
        <header className="header">
            <div
                className="header__user"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
            >
                <img src="/user-139.svg" alt="user" />
                Евгений
            </div>
        </header>
    );
};

export default Header;
