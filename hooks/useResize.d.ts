import React from "react";
import { ComponentSize, ComponentStyle, Dispatcher, ResizeProps } from "../types/ui";
interface UseResizeProps extends ComponentStyle {
    onResize: Dispatcher<ResizeProps>;
    resizeBoardOption?: ComponentSize;
    unit: string;
}
interface UseResizeReturns {
    handleMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => void;
    isResizing: boolean;
}
declare const useResize: ({ width, height, top, left, onResize, resizeBoardOption, unit, }: UseResizeProps) => UseResizeReturns;
export default useResize;
