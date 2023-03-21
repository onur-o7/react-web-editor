import { ComponentLocation, ComponentSize, DragAndDropItem } from "../types/ui";
interface NewComponentStyle {
    newLeft: number;
    newTop: number;
    newWidth: number;
    newHeight: number;
}
interface ComponentCenter {
    centerX: number;
    centerY: number;
}
interface ClientLocation {
    clientX: number;
    clientY: number;
}
interface ComponentLocatedCenter {
    isCenterX: boolean;
    isCenterY: boolean;
}
export declare const getBoundPosition: (clientX: number, clientY: number, x: number, y: number, width?: number | undefined, height?: number | undefined, parentLocation?: ComponentSize | undefined) => ComponentLocation;
export declare const generateDraggedList: (items: DragAndDropItem[], startPoint: number, endPoint: number) => DragAndDropItem[];
export declare const changeComponentLocationByHandler: (handlerType: string, left: number, top: number, width: number, height: number, differenceX: number, differenceY: number, parentLocation?: ComponentSize | undefined) => NewComponentStyle;
export declare const calculateCenter: (width: number, height: number, top?: number | undefined, left?: number | undefined) => ComponentCenter;
export declare const isLocatedCenter: (width: number, height: number, top: number, left: number, boardWidth?: number | undefined, boardHeight?: number | undefined) => ComponentLocatedCenter;
export declare const convertPointsByUnit: (unit: string, x: number, y: number) => ClientLocation;
export declare const convertPointsToPixel: (unit: string, x: number, y: number) => ClientLocation;
export declare const generateHtml: (text: string) => string;
export {};
