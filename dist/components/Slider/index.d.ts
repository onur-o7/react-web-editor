import React from "react";
interface SliderProps {
    min?: number;
    max?: number;
    value: number;
    onChange: () => void;
    sliderRef: React.Ref<HTMLInputElement>;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
