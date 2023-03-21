import React from "react";
import { EditorProps } from "../../types/ui";
interface TextEditorBlockProps extends EditorProps {
    initialFontSize?: number;
    initialFontColor?: string;
    initialFontStyle?: string;
    initialText?: string;
    initialFontName?: string;
}
declare const TextEditorBlock: React.FC<TextEditorBlockProps>;
export default TextEditorBlock;
