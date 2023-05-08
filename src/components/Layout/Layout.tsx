import { FC, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import { BsTelephoneX } from "react-icons/bs";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="wrapper">
      <Sidebar />
      <main style={{ padding: "20px" }}>{children}</main>
      <div className="call">
        <BsTelephoneX />
      </div>
    </div>
  );
};

export default Layout;
