import React from "react";
import { ComponentSize, ComponentStyle, Dispatcher } from "../types/ui";
interface UseDraggableProps extends ComponentStyle {
    onDrag: Dispatcher<ComponentStyle>;
    dragBoardOption?: ComponentSize;
    unit: string;
}
interface UseDraggableReturns {
    handleDragEnd: () => void;
    handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void;
    isDragging: boolean;
}
declare const useDraggable: ({ left, top, onDrag, width, height, dragBoardOption, unit, }: UseDraggableProps) => UseDraggableReturns;
export default useDraggable;
