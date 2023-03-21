import React, { ReactNode } from "react";
interface DragAndDropTableProps {
    color?: string;
    isVertical: boolean;
    children?: ReactNode;
}
declare const DragAndDropTable: React.FC<DragAndDropTableProps>;
export default DragAndDropTable;
