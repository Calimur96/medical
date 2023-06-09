import { FC } from "react";
import "./Menu.scss";
import { useMenu } from "../../store/menu";
import { useNavigate } from "react-router-dom";
import { useCloseBody } from "../../hooks/useCloseBody";

const Menu: FC = (): JSX.Element => {
  const { isActive, setIsActive, isSelect, setIsSelect } = useMenu();

  const navigate = useNavigate();

  // Закрывает меню при нажатии на тело сайта кроме самого меню, если прописать в меню: onClick={(e) => e.stopPropagation()}
  useCloseBody(setIsActive);

  return (
    <div
      className={`${"menu"} ${isActive && "active"}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="menu__multi-account"></div>
      <img src="/arrow.png" alt="" className="menu__arrow" />
      <div className="menu__user">
        <img src="/user-139.svg" alt="user" />
      </div>
      <ul className="menu__nav-ul">
        <li
          className={`menu__nav-li ${isSelect === "account" && "active"}`}
          onClick={() => {
            setIsSelect("account");
            navigate("/account");
          }}
        >
          Аккаунт <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-line"></li>
        <li
          className={`menu__nav-li ${isSelect === "entries" && "active"}`}
          onClick={() => {
            setIsSelect("entries");
            navigate("/entries");
          }}
        >
          Записи <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-li">
          Медицинская карта <img src="/arrow.png" alt="" />
        </li>
        <li
          className={`menu__nav-li ${isSelect === "location" && "active"}`}
          onClick={() => {
            setIsSelect("location");
            navigate("/location");
          }}
        >
          Местоположение <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-line"></li>
        <li className="menu__nav-li">
          Доступ <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-li">
          Настройки <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-line"></li>
        <li className="menu__nav-li">
          Выход <img src="/arrow.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
