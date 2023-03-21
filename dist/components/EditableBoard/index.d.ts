import React, { ReactNode } from "react";
interface EditableBoard {
    width: number;
    height: number;
    left?: number;
    top?: number;
    backgroundColor: string;
    unit: string;
    children?: ReactNode;
}
declare const EditableBoard: React.FC<EditableBoard>;
export default EditableBoard;
