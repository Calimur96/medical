import { FC, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import CallBtn from "../callBtn/CallBtn";
import { useCall } from "../../store/call";
import ExtraCall from "../extraCall/ExtraCall";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  const { isActive } = useCall();

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Menu />
      {isActive && <ExtraCall />}
      <main>{children}</main>
      <CallBtn className="pc__call" />
      <Footer />
    </div>
  );
};

export default Layout;
