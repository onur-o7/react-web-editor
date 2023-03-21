import { ComponentStyle } from "../types/ui";
interface UseEditorBoardReturns {
    measuredRef: (node: HTMLDivElement) => void;
    editorBoardStyle: ComponentStyle;
}
declare const useEditorBoard: () => UseEditorBoardReturns;
export default useEditorBoard;
