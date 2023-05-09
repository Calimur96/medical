import { FC, useEffect } from "react";
import "./Menu.scss";
import { useMenu } from "../../store/menu";
import { useNavigate } from "react-router-dom";

const Menu: FC = (): JSX.Element => {
    const { isActive, setIsActive, isSelect, setIsSelect } = useMenu();

<<<<<<< HEAD
    const handleClickClose = () => {
        setIsActive(false);
=======
  const navigate = useNavigate();

  const handleClickClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickClose);

    return () => {
      window.removeEventListener("click", handleClickClose);
>>>>>>> fe0a577ef59df57b3c16de0e4ee14221540a9a20
    };

<<<<<<< HEAD
    useEffect(() => {
        window.addEventListener("click", handleClickClose);

        return () => {
            window.removeEventListener("click", handleClickClose);
        };
    }, []);

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
                    className={`${
                        isSelect === "account"
                            ? "menu__nav-li active"
                            : "menu__nav-li"
                    }`}
                    onClick={() => setIsSelect("account")}
                >
                    Аккаунт <img src="/arrow.png" alt="" />
                </li>
                <li className="menu__nav-line"></li>
                <li className="menu__nav-li">
                    Записи <img src="/arrow.png" alt="" />
                </li>
                <li className="menu__nav-li">
                    Медицинская карта <img src="/arrow.png" alt="" />
                </li>
                <li className="menu__nav-li">
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
=======
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
        <li className="menu__nav-li active">
          Аккаунт <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-line"></li>
        <li className="menu__nav-li">
          Записи <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-li">
          Медицинская карта <img src="/arrow.png" alt="" />
        </li>
        <li className="menu__nav-li" onClick={() => navigate("/location")}>
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
>>>>>>> fe0a577ef59df57b3c16de0e4ee14221540a9a20
};

export default Menu;
