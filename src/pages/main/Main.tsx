import { FC } from "react";

import Layout from "../../components/Layout/Layout";
import ExtraCall from "../../components/extraCall/ExtraCall";
import { useCall } from "../../store/call";

import "./Main.scss";

const Main: FC = (): JSX.Element => {
    const { isActive } = useCall();

    return <Layout>{isActive && <ExtraCall />}</Layout>;
};

export default Main;
