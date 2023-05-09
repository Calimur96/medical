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
          <img
            src="/fi-rr-home.png"
            alt="home"
            style={{ transform: "translateY(3.5px)" }}
          />
        </li>
        <li>
          <img src="/convert.png" alt="convert" />
        </li>
        <li>
          <img src="/search.png" alt="search" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
