import { FC } from "react";
import "./Sidebar.scss";
import { BsChatSquareText, BsSearch, BsHouseHeart } from "react-icons/bs";
import { useMenu } from "../../store/menu";
import Menu from "../menu/Menu";

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
      <Menu />
    </div>
  );
};

export default Sidebar;
