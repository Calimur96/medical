import { FC, useState } from "react";
import "./Footer.scss";
import { BsChatSquareText, BsHouseHeart, BsSearch } from "react-icons/bs";

const Footer: FC = (): JSX.Element => {
  const [isActive, setiIsActive] = useState<boolean>(Boolean);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div
          className={`footer__call ${isActive && "active"}`}
          onClick={() => setiIsActive((prev) => !prev)}
        >
          <img src="/phone.png" alt="phone" className="footer__call-phone" />
          <img src="/plus.png" alt="plus" className="footer__call-plus" />
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
