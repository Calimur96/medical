import { FC, useState } from "react";
import { IStarProps } from "../../types/star.interface";

import "./StarRating.scss";

const StarRating: FC<IStarProps> = ({ rating, maxRating, disabledStar }) => {
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [isRating, setIsRating] = useState<number>(rating);

    const handleMouseEnter = (i: number) => {
        if (disabledStar) return;

        setHoverRating(i);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (i: number) => {
        if (disabledStar) return;

        setIsRating(i);
        console.log(i);
    };

    const stars = Array.from({ length: maxRating }, (_, i) => i + 1).map(
        (i: number) => {
            let className = "rating-star";
            if (i <= (hoverRating || isRating)) {
                className += " rating-star_active";
            }
            const style = className.includes("rating-star_active")
                ? { fill: "#BAA911" }
                : { fill: "none" };
            return (
                <span
                    key={i}
                    className={className}
                    style={style}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleClick(i)}
                >
                    <svg
                        width="32"
                        height="27"
                        viewBox="0 0 32 27"
                        fill={style.fill}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.7659 1.26607C15.8469 1.04954 16.1531 1.04955 16.2341 1.26607L19.3203 9.51446C19.5761 10.1981 20.2294 10.6512 20.9593 10.6512H30.6111C30.6905 10.6512 30.7364 10.6745 30.7667 10.6989C30.8022 10.7274 30.8343 10.7731 30.8513 10.8318C30.8683 10.8905 30.8654 10.9463 30.8507 10.9893C30.838 11.0261 30.8116 11.0703 30.7445 11.1127L23.19 15.8791C22.4887 16.3216 22.1942 17.1957 22.4848 17.9724L25.4253 25.8315C25.5092 26.0558 25.2603 26.2584 25.0578 26.1306L16.9338 21.0048C16.3633 20.6449 15.6367 20.6449 15.0662 21.0048L6.94223 26.1306C6.73972 26.2584 6.49077 26.0558 6.57468 25.8315L9.51518 17.9724C9.80579 17.1957 9.51133 16.3216 8.80996 15.8791L1.25548 11.1127C1.18837 11.0703 1.16198 11.0261 1.14934 10.9893C1.13457 10.9463 1.13174 10.8905 1.14872 10.8318C1.16569 10.7731 1.19785 10.7274 1.23329 10.6989C1.2636 10.6745 1.30953 10.6512 1.38888 10.6512H11.0407C11.7706 10.6512 12.4239 10.1981 12.6797 9.51446L15.7659 1.26607Z"
                            stroke="#BAA911"
                            strokeWidth="1.5"
                        />
                    </svg>
                </span>
            );
        }
    );

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
