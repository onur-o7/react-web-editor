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
var MenuOption = function (_a) {
    var name = _a.name, children = _a.children;
    return (react_1.default.createElement(MenuRow, null,
        react_1.default.createElement(ManuNameTag, null, name),
        react_1.default.createElement(ManuRowContent, null, children)));
};
var MenuRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0.05rem 0;\n  color: #555550;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0.05rem 0;\n  color: #555550;\n"])));
var ManuNameTag = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin: 0.2rem;\n  color: #9c9393;\n  font-weight: 600;\n  font-size: 0.7rem;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: 0.2rem;\n  color: #9c9393;\n  font-weight: 600;\n  font-size: 0.7rem;\n"])));
var ManuRowContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"])));
exports.default = MenuOption;
var templateObject_1, templateObject_2, templateObject_3;
