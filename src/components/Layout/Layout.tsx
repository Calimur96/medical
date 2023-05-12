import { FC, ReactNode, useEffect } from "react";

import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import CallBtn from "../callBtn/CallBtn";

import ExtraCall from "../extraCall/ExtraCall";
import { useMenu } from "../../store/menu";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  const { setIsActive } = useMenu();

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Menu />
      <ExtraCall />
      <main>{children}</main>
      <CallBtn className="pc__call" />
      <Footer />
    </div>
  );
};

export default Layout;
