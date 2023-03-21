import React from "react";
interface UseColorProps {
    initialColor?: string;
}
interface UseColorReturns {
    color: string;
    handleColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    handleFontColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const useColor: ({ initialColor }: UseColorProps) => UseColorReturns;
export default useColor;
