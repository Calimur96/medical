import { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import { motion } from "framer-motion";

import Layout from "../../components/Layout/Layout";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import RecentSearch from "./recentSearch/RecentSearch";
import Centers from "./Centers/Centers";
import Clinic from "./Clinic/Clinic";
import Specialists from "./Specialists/Specialists";

import "./Search.scss";

const Search: FC = () => {
    const [isFilterMenu, setIsFilterMenu] = useState<boolean>(false);
    const [selectFilter, setSelectFilter] = useState<string>("recent");

    return (
        <Layout>
            <div className="search-page">
                <HeaderNavBar>
                    <div className="search-page__header">
                        <div className="search-page__input-wrapper">
                            <button className="search-page__input-btn">
                                <BiSearch size={30} />
                            </button>
                            <input
                                type="text"
                                className="search-page__input"
                                placeholder="Поиск..."
                            />
                        </div>
                        {isFilterMenu ? (
                            <p
                                style={{ color: "#fff", cursor: "pointer" }}
                                onClick={() => setIsFilterMenu(false)}
                            >
                                Отмена
                            </p>
                        ) : (
                            <VscSettings
                                size={30}
                                style={{ cursor: "pointer" }}
                                onClick={() => setIsFilterMenu((bol) => !bol)}
                            />
                        )}
                    </div>
                </HeaderNavBar>
                {isFilterMenu && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: "-200px",
                        }}
                        animate={{ opacity: 1, y: "0", scale: 1 }}
                    >
                        <HeaderNavBar>
                            <div className="container">
                                <div className="search-page__header-filters">
                                    <p
                                        className="search-page__header-filter"
                                        style={{
                                            color:
                                                selectFilter === "centers"
                                                    ? "#fff"
                                                    : "",
                                        }}
                                        onClick={() =>
                                            setSelectFilter("centers")
                                        }
                                    >
                                        Центры:
                                    </p>
                                    <p
                                        className="search-page__header-filter"
                                        style={{
                                            color:
                                                selectFilter === "clinic"
                                                    ? "#fff"
                                                    : "",
                                        }}
                                        onClick={() =>
                                            setSelectFilter("clinic")
                                        }
                                    >
                                        Клиника:
                                    </p>
                                    <p
                                        className="search-page__header-filter"
                                        style={{
                                            color:
                                                selectFilter === "specialists"
                                                    ? "#fff"
                                                    : "",
                                        }}
                                        onClick={() =>
                                            setSelectFilter("specialists")
                                        }
                                    >
                                        Специалисты:
                                    </p>
                                </div>
                            </div>
                        </HeaderNavBar>
                    </motion.div>
                )}
                <div className="search-page__inner">
                    <div className="container">
                        {selectFilter === "recent" && <RecentSearch />}
                        {selectFilter === "centers" && <Centers />}
                        {selectFilter === "clinic" && <Clinic />}
                        {selectFilter === "specialists" && <Specialists />}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
