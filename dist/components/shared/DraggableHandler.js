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
var DraggableHandler = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid #D5CCCC;\n  position: absolute;\n  cursor: move;\n  z-index: 9;\n"], ["\n  width: 100%;\n  height: 100%;\n  border: 1px solid #D5CCCC;\n  position: absolute;\n  cursor: move;\n  z-index: 9;\n"])));
exports.default = DraggableHandler;
var templateObject_1;
