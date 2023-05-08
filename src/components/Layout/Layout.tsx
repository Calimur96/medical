import { FC, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import { BsTelephoneX } from "react-icons/bs";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Menu />
      <main style={{ padding: "20px" }}>{children}</main>
      <div className="call">
        <BsTelephoneX />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
