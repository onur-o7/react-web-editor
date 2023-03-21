import React from "react";
interface UseSliderProps {
    max: number;
    initialValue?: number;
}
interface UseSliderReturns {
    value: number;
    handleValueChange: () => void;
    sliderRef: React.Ref<HTMLInputElement>;
}
declare const useSlider: ({ max, initialValue }: UseSliderProps) => UseSliderReturns;
export default useSlider;
