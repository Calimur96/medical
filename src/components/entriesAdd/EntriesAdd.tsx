import { FC, useEffect } from "react";
import Modal from "../UI/modal/Modal";
import "./EntriesAdd.scss";
import { useEntries } from "./store";
import Map from "./map/Map";

interface Props {
  setIsActive: (bool: boolean) => void;
}

const EntriesAdd: FC<Props> = (): JSX.Element => {
  const { setIsActive, step, isActive } = useEntries();

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return <Modal setIsActive={setIsActive}>{step === 1 ? <Map /> : ""}</Modal>;
};

export default EntriesAdd;
