import { FC } from "react";
import { BsChatSquareText, BsSearch, BsHouseHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useMenu } from "../../store/menu";

import "./Sidebar.scss";

const Sidebar: FC = (): JSX.Element => {
    const { setIsActive } = useMenu();
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <div className="sidebar__nav">
                <ul className="sidebar__nav-ul">
                    <li
                        className="sidebar__nav-li sidebar__nav-user"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsActive(true);
                        }}
                    >
                        <img src="/user-139.svg" alt="user" />
                        Евгений
                    </li>
                    <li
                        className="sidebar__nav-li sidebar__nav-route"
                        onClick={() => navigate("/")}
                    >
                        <BsHouseHeart size={18} /> Главная
                    </li>
                    <li className="sidebar__nav-li sidebar__nav-route">
                        <BsChatSquareText size={18} />
                        Сообщения
                    </li>
                    <li className="sidebar__nav-li sidebar__nav-route">
                        <BsSearch size={18} />
                        Поиск
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
