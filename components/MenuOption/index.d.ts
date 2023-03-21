import React, { ReactNode } from "react";
interface MenuOptionProps {
    name: string;
    children?: ReactNode;
}
declare const MenuOption: React.FC<MenuOptionProps>;
export default MenuOption;
