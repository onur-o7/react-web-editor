"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useDragAndDrop_1 = __importDefault(require("../../hooks/useDragAndDrop"));
var DragAndDropTable = function (_a) {
    var color = _a.color, isVertical = _a.isVertical, children = _a.children;
    var _b = useDragAndDrop_1.default({ items: react_1.Children.toArray(children) }), handleDragStart = _b.handleDragStart, handleDragOver = _b.handleDragOver, handleDropDown = _b.handleDropDown, handleDragLeave = _b.handleDragLeave, dragList = _b.dragList, endPoint = _b.endPoint, componentSize = _b.componentSize;
    return (react_1.default.createElement(Wrapper, { backgroundColor: color, isVertical: isVertical }, dragList.map(function (item, index) { return (react_1.default.createElement(Block, { key: index, width: componentSize.width, height: componentSize.height, id: String(index), draggable: true, onDragStart: handleDragStart, onDragOver: handleDragOver, onDrop: handleDropDown, onDragLeave: handleDragLeave, className: endPoint === index ? "isDropDown" : "" }, item)); })));
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var isVertical = _a.isVertical;
    return isVertical && "column";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor && backgroundColor;
});
var Block = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  cursor: move;\n  background-color: ", ";\n\n  &.isDropDown {\n    position: relative;\n    opacity: 0.1;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  cursor: move;\n  background-color: ", ";\n\n  &.isDropDown {\n    position: relative;\n    opacity: 0.1;\n  }\n"])), function (_a) {
    var color = _a.color;
    return color && color;
});
exports.default = DragAndDropTable;
var templateObject_1, templateObject_2;
