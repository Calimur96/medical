import { FC } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

import "./ExtraCall.scss";

const ExtraCall: FC = () => {
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
                <div className="extra-call__items">
                    <motion.div
                        variants={itemVariants}
                        className="extra-call__item"
                        initial="hidden"
                        whileHover="hover"
                    >
                        <HiOutlinePhoneMissedCall />
                    </motion.div>
                    <motion.div
                        className="extra-call__item"
                        variants={itemVariants}
                        initial="hidden"
                        whileHover="hover"
                    >
                        <HiOutlineEnvelope />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ExtraCall;
