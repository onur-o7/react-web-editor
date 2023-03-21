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
var BoxInnerShadow_1 = require("../../theme/BoxInnerShadow");
var ui_1 = require("../../utils/ui");
var CoordinatesTag = function (_a) {
    var left = _a.left, top = _a.top, unit = _a.unit;
    var _b = ui_1.convertPointsToPixel(unit, left, top), clientX = _b.clientX, clientY = _b.clientY;
    return react_1.default.createElement(Tag, null, "x: " + clientX.toFixed(1) + " y: " + clientY.toFixed(1));
};
var Tag = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 110px;\n  max-height: 20px;\n  top: -25px;\n  left: -25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #ffffff;\n  color: #c2b5b5;\n  font-size: 0.8rem;\n  font-weight: bold;\n  border-radius: 5px;\n  z-index: 5;\n  ", ";\n"], ["\n  min-width: 110px;\n  max-height: 20px;\n  top: -25px;\n  left: -25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #ffffff;\n  color: #c2b5b5;\n  font-size: 0.8rem;\n  font-weight: bold;\n  border-radius: 5px;\n  z-index: 5;\n  ", ";\n"])), BoxInnerShadow_1.BoxInnerShadow);
exports.default = CoordinatesTag;
var templateObject_1;
