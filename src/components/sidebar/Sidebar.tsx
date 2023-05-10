import { FC } from "react";
import "./Sidebar.scss";
import { useMenu } from "../../store/menu";

const Sidebar: FC = (): JSX.Element => {
  const { setIsActive } = useMenu();

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
};

export default Sidebar;
