import { FC, MouseEvent } from "react";
import { useCall } from "../../store/call";
import "./CallBtn.scss";

interface Props {
    className?: string;
}

const CallBtn: FC<Props> = ({ className }): JSX.Element => {
    const { setIsActive, isActive } = useCall();

<<<<<<< HEAD
    return (
        <div
            className={`footer__call ${isActive && "active"} ${className}`}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setIsActive(!isActive);
            }}
        >
            <img src="/phone.png" alt="phone" className="footer__call-phone" />
            <img src="/plus2.png" alt="plus" className="footer__call-plus" />
        </div>
    );
=======
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
>>>>>>> 9f06c76d630040681b83188fecda8380ae8cf51c
};

export default CallBtn;
