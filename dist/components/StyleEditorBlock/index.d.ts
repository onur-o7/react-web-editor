import React from "react";
import { EditorProps } from "../../types/ui";
interface StyleEditorBlockProps extends EditorProps {
    initialColor?: string;
    initialImage?: string;
}
declare const StyleEditorBlock: React.FC<StyleEditorBlockProps>;
export default StyleEditorBlock;
