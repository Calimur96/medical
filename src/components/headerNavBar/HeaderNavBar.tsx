import { FC } from "react";
import { Children } from "../../types/children.type";

import "./HeaderNavBar.scss";

const HeaderNavBar: FC<Children> = ({ children }) => {
    return <div className="header-navbar">{children}</div>;
};

export default HeaderNavBar;
