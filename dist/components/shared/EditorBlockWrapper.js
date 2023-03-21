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
var EditorBlockWrapper = styled_components_1.default.div.attrs(function (_a) {
    var left = _a.left, top = _a.top, width = _a.width, height = _a.height, unit = _a.unit;
    return ({
        style: {
            top: top && "" + top + unit,
            left: left && "" + left + unit,
            width: width && "" + width + unit,
            height: left && "" + height + unit,
        },
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
exports.default = EditorBlockWrapper;
var templateObject_1;
