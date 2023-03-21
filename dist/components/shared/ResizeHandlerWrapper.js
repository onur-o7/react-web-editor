"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var ResizeHandlersWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .top-left {\n    top: -3px;\n    left: -3px;\n    cursor: nw-resize;\n  }\n\n  .top-right {\n    top: -3px;\n    right: -3px;\n    cursor: ne-resize;\n  }\n\n  .bottom-left {\n    bottom: -3px;\n    left: -3px;\n    cursor: sw-resize;\n  }\n\n  .bottom-right {\n    bottom: -3px;\n    right: -3px;\n    cursor: se-resize;\n  }\n\n  > * {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    position: absolute;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n    z-index: 10;\n  }\n"], ["\n  .top-left {\n    top: -3px;\n    left: -3px;\n    cursor: nw-resize;\n  }\n\n  .top-right {\n    top: -3px;\n    right: -3px;\n    cursor: ne-resize;\n  }\n\n  .bottom-left {\n    bottom: -3px;\n    left: -3px;\n    cursor: sw-resize;\n  }\n\n  .bottom-right {\n    bottom: -3px;\n    right: -3px;\n    cursor: se-resize;\n  }\n\n  > * {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background-color: #FFFFFF;\n    position: absolute;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n    z-index: 10;\n  }\n"])));
exports.default = ResizeHandlersWrapper;
var templateObject_1;
