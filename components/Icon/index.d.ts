import React, { ReactNode } from "react";
interface IconProps {
    children?: ReactNode;
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
    onClick?: (ev: React.MouseEvent) => void;
    onMouseDown?: (ev: React.MouseEvent<HTMLDivElement>) => void;
    onMouseUp?: () => void;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
