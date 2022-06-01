import React from "react";
import IconsSVG from "../../assets/images/icons.svg";

type Props = {
    name: string,
    size: number
};

const Icon = ({ name, size }: Props): React.ReactElement => {
    return (
        <svg className="icon" width={size} height={size}>
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    )
}

export default Icon;