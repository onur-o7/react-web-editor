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
var ui_1 = require("../../utils/ui");
var GuideLine = function (_a) {
    var left = _a.left, top = _a.top, width = _a.width, height = _a.height, _b = _a.boardWidth, boardWidth = _b === void 0 ? window.screen.width : _b, _c = _a.boardHeight, boardHeight = _c === void 0 ? window.screen.height : _c, unit = _a.unit;
    var _d = ui_1.calculateCenter(width, height), centerX = _d.centerX, centerY = _d.centerY;
    var _e = ui_1.isLocatedCenter(width, height, top, left, boardWidth, boardHeight), isCenterX = _e.isCenterX, isCenterY = _e.isCenterY;
    return (react_1.default.createElement(Wrapper, null,
        isCenterX &&
            react_1.default.createElement(VerticalLine, { top: top, left: centerX, height: boardHeight, unit: unit }),
        isCenterY &&
            react_1.default.createElement(HorizontalLine, { top: centerY, left: left, width: boardWidth, unit: unit })));
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"])));
var HorizontalLine = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  border-top: 1px solid #FB99BC;\n  position: absolute;\n  z-index: 10;\n"], ["\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  border-top: 1px solid #FB99BC;\n  position: absolute;\n  z-index: 10;\n"])), function (_a) {
    var top = _a.top, unit = _a.unit;
    return top ? "" + top + unit : 0;
}, function (_a) {
    var left = _a.left, unit = _a.unit;
    return left ? "" + -left + unit : 0;
}, function (_a) {
    var width = _a.width, unit = _a.unit;
    return width ? "" + width + unit : 0;
});
var VerticalLine = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: ", ";\n  left: ", ";\n  height: ", ";\n  border-left: 1px solid #FB99BC;\n  position: absolute;\n  z-index: 10;\n"], ["\n  top: ", ";\n  left: ", ";\n  height: ", ";\n  border-left: 1px solid #FB99BC;\n  position: absolute;\n  z-index: 10;\n"])), function (_a) {
    var top = _a.top, unit = _a.unit;
    return top ? "" + -top + unit : 0;
}, function (_a) {
    var left = _a.left, unit = _a.unit;
    return left ? "" + left + unit : 0;
}, function (_a) {
    var height = _a.height, unit = _a.unit;
    return height ? "" + height + unit : 0;
});
exports.default = GuideLine;
var templateObject_1, templateObject_2, templateObject_3;
