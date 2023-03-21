import React from "react";
import { ComponentStyle } from "../../types/ui";
interface GuideLine extends ComponentStyle {
    boardWidth?: number;
    boardHeight?: number;
    unit: string;
}
declare const GuideLine: React.FC<GuideLine>;
export default GuideLine;
