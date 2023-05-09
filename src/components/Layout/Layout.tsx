import { FC, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import CallBtn from "../callBtn/CallBtn";

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
      <CallBtn className="pc__call" />
      <Footer />
    </div>
  );
};

export default Layout;
