import { FC } from "react";
import "./Footer.scss";
import { BsChatSquareText, BsHouseHeart, BsSearch } from "react-icons/bs";
import CallBtn from "../callBtn/CallBtn";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <CallBtn />
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
