
import { FC, useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import HeaderNavBar from "../../components/headerNavBar/HeaderNavBar";

import "./Entries.scss";
import { Link } from "react-router-dom";
import EntriesAdd from "../../components/entriesAdd/EntriesAdd";

const Entries: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  console.log(isActive);

  return (
    <Layout>
      {isActive && <EntriesAdd setIsActive={setIsActive} />}
      <div className="entries">
        <div className="entries__header">
          <div
            className="entries__header-plus"
            onClick={(e) => {
              e.stopPropagation();
              setIsActive(true);
            }}
          >
            +
          </div>
        </div>
        <div className="entries__items">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
            <div className="entries__item" key={e}>
              <div className="entries__item-info">
                <h2>
                  Название: <span></span>
                </h2>
                <h2>
                  Ведущий: <span></span>
                </h2>
                <h2>
                  Представляет: <span></span>
                </h2>
                <h2>
                  Специальность: <span></span>
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div className="entries__item-datetime">
                  20/12/2024 <span>14:00 - 15:00</span>
                </div>
                <div className="entries__item-links">
                  <span>Онлайн/Офлайн</span>
                                    <span>Адрес</span>

                                    <Link to=".#">Перейти в профиль</Link>

                                    <Link to=".#">Посмотреть анкету</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Entries;
