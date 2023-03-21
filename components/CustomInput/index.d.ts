import React from "react";
import { TypedCustomInputProps } from "../../types/handler";
interface CustomInputProps extends TypedCustomInputProps {
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    accept?: string;
}
declare const CustomInput: React.FC<CustomInputProps>;
export default CustomInput;
