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
var react_helmet_async_1 = require("react-helmet-async");
var MenuBoard_1 = __importDefault(require("../MenuBoard"));
var TextEditor = function (_a) {
    var html = _a.html, onChange = _a.onChange, componentRef = _a.componentRef, isEditing = _a.isEditing, sliderRef = _a.sliderRef, onColorChange = _a.onColorChange, sliderValue = _a.sliderValue, onSliderChange = _a.onSliderChange, onStyleButtonClick = _a.onStyleButtonClick, fontStyle = _a.fontStyle, onFontButtonClick = _a.onFontButtonClick, fontName = _a.fontName, color = _a.color;
    return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, null,
        react_1.default.createElement(react_helmet_async_1.Helmet, null,
            react_1.default.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            react_1.default.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Andada+Pro&family=Bebas+Neue&family=MonteCarlo&family=Roboto:wght@300&family=STIX+Two+Text&family=Style+Script&display=swap", rel: "stylesheet" })),
        react_1.default.createElement(FontStyle, null,
            react_1.default.createElement(TextBoard, { className: fontStyle + " " + fontName, contentEditable: true, ref: componentRef, dangerouslySetInnerHTML: html, onInput: onChange, fontSize: sliderValue, fontName: fontName, color: color }),
            isEditing && (react_1.default.createElement(MenuBoard_1.default, { sliderRef: sliderRef, onColorChange: onColorChange, onSliderChange: onSliderChange, sliderValue: sliderValue, onStyleButtonClick: onStyleButtonClick, onFontButtonClick: onFontButtonClick, fontStyle: fontStyle })))));
};
var TextBoard = styled_components_1.default.div.attrs(function (_a) {
    var fontSize = _a.fontSize, color = _a.color;
    return ({
        style: {
            fontSize: fontSize && fontSize * 100 + "px",
            color: color ? color : "black",
        },
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding: 0;\n  z-index: 11;\n\n  p {\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  padding: 0;\n  z-index: 11;\n\n  p {\n    margin: 0;\n    padding: 0;\n  }\n"])));
var FontStyle = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .twin-color-text {\n    font-size: 26px;\n    font-weight: 600;\n    text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;\n  }\n\n  .box-text {\n    text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 3px 3px 0px;\n    border: none;\n    outline: none;\n    font-weight: 600;\n  }\n\n  .down-side-text {\n    font-weight: 600;\n    text-shadow:\n      0px 4px 3px rgba(0,0,0,0.4),\n      0px 8px 13px rgba(0,0,0,0.1),\n      0px 18px 23px rgba(0,0,0,0.1);\n  }\n\n  .out-line-text {\n    font-weight: 600;\n    -webkit-text-stroke: 1px white;\n    text-shadow: 0px 1px 4px #3899ec;\n  }\n\n  .bubble-shadow-text {\n    font-weight: 600;\n    text-shadow: 0 4px 8.896px #247aca, 0 -2px 1px #6499fd;\n  }\n\n  .andada-pro {\n    font-family: \"Andada Pro\", serif !important;\n  }\n\n  .bebas-nenu {\n    font-family: \"Bebas Neue\", cursive !important;\n  }\n\n  .montecarlo {\n    font-family: \"MonteCarlo\", cursive !important;\n  }\n\n  .roboto {\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .stix-two-text {\n    font-family: \"STIX Two Text\", serif !important;\n  }\n\n  .style-script {\n    font-family: \"Style Script\", cursive !important;\n  }\n"], ["\n  .twin-color-text {\n    font-size: 26px;\n    font-weight: 600;\n    text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;\n  }\n\n  .box-text {\n    text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 3px 3px 0px;\n    border: none;\n    outline: none;\n    font-weight: 600;\n  }\n\n  .down-side-text {\n    font-weight: 600;\n    text-shadow:\n      0px 4px 3px rgba(0,0,0,0.4),\n      0px 8px 13px rgba(0,0,0,0.1),\n      0px 18px 23px rgba(0,0,0,0.1);\n  }\n\n  .out-line-text {\n    font-weight: 600;\n    -webkit-text-stroke: 1px white;\n    text-shadow: 0px 1px 4px #3899ec;\n  }\n\n  .bubble-shadow-text {\n    font-weight: 600;\n    text-shadow: 0 4px 8.896px #247aca, 0 -2px 1px #6499fd;\n  }\n\n  .andada-pro {\n    font-family: \"Andada Pro\", serif !important;\n  }\n\n  .bebas-nenu {\n    font-family: \"Bebas Neue\", cursive !important;\n  }\n\n  .montecarlo {\n    font-family: \"MonteCarlo\", cursive !important;\n  }\n\n  .roboto {\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .stix-two-text {\n    font-family: \"STIX Two Text\", serif !important;\n  }\n\n  .style-script {\n    font-family: \"Style Script\", cursive !important;\n  }\n"])));
exports.default = TextEditor;
var templateObject_1, templateObject_2;
