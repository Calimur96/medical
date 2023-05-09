import { FC } from "react";
import { useCall } from "../../store/call";
import { useMenu } from "../../store/menu";

import Layout from "../../components/Layout/Layout";
import ExtraCall from "../../components/extraCall/ExtraCall";
import AccountInfo from "../../components/accountInfo/AccountInfo";

import "./Main.scss";

const Main: FC = (): JSX.Element => {
    const { isActive } = useCall();
    const { isSelect } = useMenu();

    return (
        <Layout>
            {isActive && <ExtraCall />}
            <div className="container">
                {isSelect === "account" && <AccountInfo />}
            </div>
        </Layout>
    );
};

export default Main;
