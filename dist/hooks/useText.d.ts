import React from "react";
import { Dispatcher, InnerHTML } from "../types/ui";
interface UseTextProps {
    onChange: Dispatcher<string>;
    html: string;
    initialFontName?: string;
    initialFontStyle?: string;
    initialText?: string;
}
interface UseTextReturns {
    textRef: React.Ref<HTMLDivElement>;
    innerHTML: InnerHTML;
    handleInputChange: () => void;
    handleEditingMode: () => void;
    isEditing: boolean;
    fontName: string;
    handleStyleButtonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    fontStyle: string;
    handleFontButtonClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
declare const useText: ({ html, onChange, initialFontStyle, initialFontName, initialText, }: UseTextProps) => UseTextReturns;
export default useText;
