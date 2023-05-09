import { FC } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import avatar from "../../assets/avatar.png";
import "./AccountInfo.scss";

const AccountInfo: FC = () => {
    return (
        <div className="account-info">
            <div className="account-info__inner">
                <div className="account-info__profile">
                    <div className="account-info__img-wrapper">
                        <img
                            src={avatar}
                            alt=""
                            className="account-info__img"
                        />
                        <div className="input__wrapper">
                            <input
                                name="file"
                                type="file"
                                id="input__file"
                                className="input__file"
                                multiple
                            />
                            <label
                                htmlFor="input__file"
                                className="input__file-button"
                            >
                                <span className="input__file-icon-wrapper">
                                    <AiOutlineDownload size={25} />
                                </span>
                                <span className="input__file-button-text">
                                    Выберите файл
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
