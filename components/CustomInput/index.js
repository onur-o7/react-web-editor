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
var Icon_1 = __importDefault(require("../Icon"));
var CustomInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, type = _a.type, accept = _a.accept, children = _a.children, top = _a.top, right = _a.right, left = _a.left, bottom = _a.bottom;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Icon_1.default, { top: top, right: right, left: left, bottom: bottom },
            react_1.default.createElement(Input, { type: type, onChange: onChange, accept: accept, value: value }),
            children)));
};
var Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 20px;\n  opacity: 0;\n  position: absolute;\n"], ["\n  width: 20px;\n  opacity: 0;\n  position: absolute;\n"])));
exports.default = CustomInput;
var templateObject_1;
