import { FC } from "react";
import { useCall } from "../../store/call";
import "./CallBtn.scss";

interface Props {
  className?: string;
}

const CallBtn: FC<Props> = ({ className }): JSX.Element => {
  const { setIsActive, isActive } = useCall();

  return (
    <div
      className={`footer__call ${isActive && "active"} ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(!isActive);
      }}
    >
      <img src="/phone.png" alt="phone" className="footer__call-phone" />
      <img src="/plus2.png" alt="plus" className="footer__call-plus" />
    </div>
  );
};

export default CallBtn;
