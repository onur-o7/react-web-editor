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
var ui_1 = require("../../constants/ui");
var BoxInnerShadow_1 = require("../../theme/BoxInnerShadow");
var Slider = function (_a) {
    var _b = _a.min, min = _b === void 0 ? ui_1.SLIDER_MIN : _b, _c = _a.max, max = _c === void 0 ? ui_1.SLIDER_MAX : _c, sliderRef = _a.sliderRef, value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement(SliderBar, null,
        react_1.default.createElement(Range, { ref: sliderRef, type: "range", onChange: onChange, value: value, min: min, max: max, step: max / 100 }),
        react_1.default.createElement(ProgressBar, { value: value })));
};
var SliderBar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 7rem;\n  height: 2rem;\n"], ["\n  position: relative;\n  width: 7rem;\n  height: 2rem;\n"])));
var Range = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  -webkit-appearance: none;\n  appearance: none;\n  position: absolute;\n  margin: 0.4rem 0 0 0;\n  padding: 0;\n  width: 7rem;\n  background-color: transparent;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 1rem;\n    width: 1rem;\n    border: none;\n    border-radius: 50%;\n    background-color: white;\n    z-index: 2;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1)\n  }\n"], ["\n  -webkit-appearance: none;\n  appearance: none;\n  position: absolute;\n  margin: 0.4rem 0 0 0;\n  padding: 0;\n  width: 7rem;\n  background-color: transparent;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    height: 1rem;\n    width: 1rem;\n    border: none;\n    border-radius: 50%;\n    background-color: white;\n    z-index: 2;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1)\n  }\n"])));
var ProgressBar = styled_components_1.default.progress(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  -webkit-appearance: none;\n  appearance: none;\n  position: absolute;\n  display: block;\n  margin: 0;\n  top: 0.8rem;\n  left: 0.5rem;\n  width: 6rem;\n  height: 0.2rem;\n  z-index: -1;\n  background-color: #d7d7d7;\n\n  ::-webkit-progress-value {\n    background: linear-gradient(-1deg, #FC70A3 0%, #FB99BC 50%, #FFE6EF 100%);\n  }\n\n  ::-webkit-progress-bar {\n    ", ";\n    border-radius: 1.5px;\n    overflow: hidden\n  }\n"], ["\n  -webkit-appearance: none;\n  appearance: none;\n  position: absolute;\n  display: block;\n  margin: 0;\n  top: 0.8rem;\n  left: 0.5rem;\n  width: 6rem;\n  height: 0.2rem;\n  z-index: -1;\n  background-color: #d7d7d7;\n\n  ::-webkit-progress-value {\n    background: linear-gradient(-1deg, #FC70A3 0%, #FB99BC 50%, #FFE6EF 100%);\n  }\n\n  ::-webkit-progress-bar {\n    ", ";\n    border-radius: 1.5px;\n    overflow: hidden\n  }\n"])), BoxInnerShadow_1.BoxInnerShadow);
exports.default = Slider;
var templateObject_1, templateObject_2, templateObject_3;
