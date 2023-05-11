import { FC } from "react";
import Modal from "../UI/modal/Modal";
import "./EntriesAdd.scss";

interface Props {
  setIsActive: (bool: boolean) => void;
}

const EntriesAdd: FC<Props> = ({ setIsActive }): JSX.Element => {
  return <Modal setIsActive={setIsActive}>ads</Modal>;
};

export default EntriesAdd;
