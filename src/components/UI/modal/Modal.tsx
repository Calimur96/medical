import { motion } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useMenu } from "../../../store/menu";
import { useCloseBody } from "../../../hooks/useCloseBody";
import "./Modal.scss";

interface Props {
  children: ReactNode;
  setIsActive: (bool: boolean) => void;
}

const Modal: FC<Props> = ({ children, setIsActive }): JSX.Element => {
  const { setIsActive: setIsActiveMenu } = useMenu();

  useCloseBody(setIsActive);

  return (
    <motion.div
      className="modal"
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
      {children}
    </motion.div>
  );
};

export default Modal;
