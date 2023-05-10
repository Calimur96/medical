import { FC } from "react";
<<<<<<< HEAD
import { BsChatSquareText, BsSearch, BsHouseHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

=======
import "./Sidebar.scss";
>>>>>>> 9f06c76d630040681b83188fecda8380ae8cf51c
import { useMenu } from "../../store/menu";

import "./Sidebar.scss";

<<<<<<< HEAD
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
=======
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
          <li className="sidebar__nav-li sidebar__nav-route">
            <img
              src="/fi-rr-home.png"
              alt="home"
              style={{ transform: "translateX(-3.5px)" }}
            />{" "}
            Главная
          </li>
          <li className="sidebar__nav-li sidebar__nav-route">
            <img src="/convert.png" alt="convert" />
            Сообщения
          </li>
          <li className="sidebar__nav-li sidebar__nav-route">
            <img src="/search.png" alt="search" />
            Поиск
          </li>
        </ul>
      </div>
    </div>
  );
>>>>>>> 9f06c76d630040681b83188fecda8380ae8cf51c
};

export default Sidebar;
