import React from "react";
import { DropDownContent, DropDownProps } from "../types/ui";
interface UseDropDownReturns {
    handleDropDownClick: () => void;
    handleItemClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
    isDropDownOpen: boolean;
    selectedItem: DropDownContent;
}
declare const useDropDown: ({ items }: DropDownProps) => UseDropDownReturns;
export default useDropDown;
