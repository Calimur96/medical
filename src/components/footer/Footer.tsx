import { FC } from "react";
import "./Footer.scss";
import {
  BsChatSquareText,
  BsHouseHeart,
  BsSearch,
  BsTelephoneX,
} from "react-icons/bs";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__call">
          <BsTelephoneX />
        </div>
      </div>
      <ul className="footer__ul">
        <li>
          <BsHouseHeart size={25} />
        </li>
        <li>
          <BsChatSquareText size={25} />
        </li>
        <li>
          <BsSearch size={25} />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
