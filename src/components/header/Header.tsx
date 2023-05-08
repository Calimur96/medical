import { FC } from "react";
import "./Header.scss";
import { useMenu } from "../../store/menu";

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
