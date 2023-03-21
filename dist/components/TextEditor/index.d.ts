import React from "react";
import { InnerHTML } from "../../types/ui";
interface TextEditorProps {
    html: InnerHTML;
    isEditing: boolean;
    onChange: () => void;
    componentRef: React.Ref<HTMLDivElement>;
    sliderRef: React.Ref<HTMLInputElement>;
    onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    sliderValue: number;
    onSliderChange: () => void;
    onStyleButtonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    fontStyle: string;
    onFontButtonClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
    fontName: string;
    color?: string;
}
declare const TextEditor: React.FC<TextEditorProps>;
export default TextEditor;
