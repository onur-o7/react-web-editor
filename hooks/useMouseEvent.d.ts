import React from "react";
import { ClickState } from "../types/handler";
interface UseMouseEventReturns extends ClickState {
    isMouseOver: boolean;
    handleMouseClick: () => void;
    handleMouseOver: () => void;
    handleMouseUp: () => void;
    handleMouseLeave: () => void;
    componentRef: React.Ref<HTMLDivElement>;
}
declare const useMouseEvent: () => UseMouseEventReturns;
export default useMouseEvent;
