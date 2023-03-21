import React from "react";
import { ComponentSize, DragAndDropItem } from "../types/ui";
interface UseDragAndDropProps {
    items: DragAndDropItem[];
}
interface UseDragAndDropReturns {
    handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void;
    handleDragOver: (ev: React.MouseEvent<HTMLDivElement>) => void;
    handleDropDown: () => void;
    handleDragLeave: () => void;
    dragList: DragAndDropItem[];
    endPoint: number | null;
    startPoint: number | null;
    componentSize: ComponentSize;
    isDragging: boolean;
}
declare const useDragAndDrop: ({ items }: UseDragAndDropProps) => UseDragAndDropReturns;
export default useDragAndDrop;
