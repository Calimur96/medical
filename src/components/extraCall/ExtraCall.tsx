import { FC, useState } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

import "./ExtraCall.scss";
import ExtraCallForm from "../extraCallForm/ExtraCallForm";

enum Select {
    TEL = "tel",
    SMS = "sms",
    NOTHING = "nothing",
}

const ExtraCall: FC = () => {
    const [isSelect, setIsSelct] = useState<Select>(Select.NOTHING);

    const innerVariants = {
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3 },
        },
        hidden: { scale: 0, opacity: 0 },
    };

    const itemVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        hidden: {
            scale: 1,
        },
    };

    return (
        <motion.div
            className="extra-call"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.3,
                },
            }}
        >
            <motion.div
                className="extra-call__inner"
                variants={innerVariants}
                initial="hidden"
                animate="visible"
            >
                {isSelect === Select.NOTHING && (
                    <div className="extra-call__items">
                        <motion.div
                            variants={itemVariants}
                            className="extra-call__item"
                            initial="hidden"
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSelct(Select.TEL)}
                        >
                            <HiOutlinePhoneMissedCall />
                        </motion.div>
                        <motion.div
                            className="extra-call__item"
                            variants={itemVariants}
                            initial="hidden"
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiOutlineEnvelope />
                        </motion.div>
                    </div>
                )}
                {isSelect === Select.TEL && (
                    <ExtraCallForm back={() => setIsSelct(Select.NOTHING)} />
                )}
            </motion.div>
        </motion.div>
    );
};

export default ExtraCall;
