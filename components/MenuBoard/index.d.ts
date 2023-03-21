import React from "react";
interface MenuBoardProps {
    color?: string;
    onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    onSliderChange: () => void;
    sliderRef: React.Ref<HTMLInputElement>;
    sliderValue: number;
    fontStyle: string;
    onStyleButtonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onFontButtonClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
declare const MenuBoard: React.FC<MenuBoardProps>;
export default MenuBoard;
