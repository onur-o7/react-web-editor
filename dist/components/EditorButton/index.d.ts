import React, { ReactNode } from "react";
interface EditorButtonProps {
    name: string;
    isShowing: boolean;
    value?: string;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}
declare const EditorButton: React.FC<EditorButtonProps>;
export default EditorButton;
