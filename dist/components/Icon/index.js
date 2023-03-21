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
var Icon = function (_a) {
    var children = _a.children, top = _a.top, right = _a.right, onClick = _a.onClick, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp;
    return (react_1.default.createElement(IconBackground, { top: top, right: right, onClick: onClick, onMouseDown: onMouseDown, onMouseUp: onMouseUp },
        react_1.default.createElement(IconImage, null, children)));
};
var IconBackground = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  background-color: #ffffff;\n  position: absolute;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.082), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 12;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  background-color: #ffffff;\n  position: absolute;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.082), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 12;\n"])), function (_a) {
    var top = _a.top;
    return top && top + "px";
}, function (_a) {
    var right = _a.right;
    return right && right + "px";
}, function (_a) {
    var left = _a.left;
    return left && left + "px";
}, function (_a) {
    var bottom = _a.bottom;
    return bottom && bottom + "px";
});
var IconImage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #bdb3b3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  height: 70%;\n"], ["\n  color: #bdb3b3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  height: 70%;\n"])));
exports.default = Icon;
var templateObject_1, templateObject_2;
