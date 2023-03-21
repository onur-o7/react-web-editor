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
var BoxInnerShadow_1 = require("../../theme/BoxInnerShadow");
var BoxShadow_1 = require("../../theme/BoxShadow");
var MenuButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.2rem 0.1rem;\n  margin: 0 0.3rem;\n  color: #FB99BC;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  ", ";\n\n  :hover {\n    background-color: #f3f0f0;\n  }\n\n  :active {\n    ", ";\n    color: #FC70A3;\n  }\n\n  :hover {\n    color: #FC70A3;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.2rem 0.1rem;\n  margin: 0 0.3rem;\n  color: #FB99BC;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  ", ";\n\n  :hover {\n    background-color: #f3f0f0;\n  }\n\n  :active {\n    ", ";\n    color: #FC70A3;\n  }\n\n  :hover {\n    color: #FC70A3;\n  }\n"])), BoxShadow_1.BoxShadow, BoxInnerShadow_1.BoxInnerShadow);
exports.default = MenuButton;
var templateObject_1;
