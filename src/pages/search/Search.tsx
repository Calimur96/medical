import { FC } from "react";
import { BiSearch } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";

import Layout from "../../components/Layout/Layout";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";
import RecentSearch from "./recentSearch/recentSearch";

import "./Search.scss";

const Search: FC = () => {
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
                        <VscSettings size={30} />
                    </div>
                </HeaderNavBar>
                <div className="search-page__inner">
                    <div className="container">
                        <RecentSearch />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
