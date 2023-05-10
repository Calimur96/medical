import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import AccountInfo from "../../components/accountInfo/AccountInfo";

const Account: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className="container">
        <AccountInfo />
      </div>
    </Layout>
  );
};

export default Account;
