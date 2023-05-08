import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="sidebar"></div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
