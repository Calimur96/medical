import { FC, useState } from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

import "./ExtraCall.scss";
import ExtraCallForm from "../extraCallForm/ExtraCallForm";
import { useCloseBody } from "../../hooks/useCloseBody";
import { useCall } from "../../store/call";
import { useMenu } from "../../store/menu";

enum Select {
  TEL = "tel",
  SMS = "sms",
  NOTHING = "nothing",
}

const ExtraCall: FC = (): JSX.Element => {
  const [isSelect, setIsSelct] = useState<Select>(Select.NOTHING);
  const { isActive, setIsActive } = useCall();
  const { setIsActive: setIsActiveMenu } = useMenu();

  useCloseBody(setIsActive);

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

  return isActive ? (
    <motion.div
      className="extra-call"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsActiveMenu(false);
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
  ) : (
    <div></div>
  );
};

export default ExtraCall;
