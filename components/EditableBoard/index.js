"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var EditableBoard = function (_a) {
    var width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, left = _a.left, top = _a.top, children = _a.children, unit = _a.unit;
    return (react_1.default.createElement(Board, { width: width, height: height, backgroundColor: backgroundColor, unit: unit, left: left, top: top }, children));
};
var Board = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  left: ", ";\n  top: ", ";\n  background-color: ", ";\n  position: absolute;\n"], ["\n  width: ", ";\n  height: ", ";\n  left: ", ";\n  top: ", ";\n  background-color: ", ";\n  position: absolute;\n"])), function (_a) {
    var width = _a.width, unit = _a.unit;
    return "" + width + unit;
}, function (_a) {
    var height = _a.height, unit = _a.unit;
    return "" + height + unit;
}, function (_a) {
    var left = _a.left, unit = _a.unit;
    return "" + left + unit;
}, function (_a) {
    var top = _a.top, unit = _a.unit;
    return "" + top + unit;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
exports.default = EditableBoard;
var templateObject_1;
