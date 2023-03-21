import { Dispatcher, Location } from "./ui";
export interface TypedCustomInputProps extends Location {
<<<<<<< HEAD:types/handler.d.ts
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    children?: ReactNode;
=======
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
>>>>>>> parent of 1b9045b (feat: update dependencies and fix type errors):src/types/handler.ts
}
export interface ClickState {
    isClicked: boolean;
    onClicked: Dispatcher<boolean>;
}
