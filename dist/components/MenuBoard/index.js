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
var ai_1 = require("react-icons/ai");
var fa_1 = require("react-icons/fa");
var io_1 = require("react-icons/io");
var ui_1 = require("../../constants/ui");
var Dropdown_1 = __importDefault(require("../Dropdown"));
var EditorButton_1 = __importDefault(require("../EditorButton"));
var MenuButton_1 = __importDefault(require("../shared/MenuButton"));
var MenuOption_1 = __importDefault(require("../MenuOption"));
var Slider_1 = __importDefault(require("../Slider"));
var BoxShadow_1 = require("../../theme/BoxShadow");
var BoxInnerShadow_1 = require("../../theme/BoxInnerShadow");
var MenuBoard = function (_a) {
    var sliderRef = _a.sliderRef, fontStyle = _a.fontStyle, onColorChange = _a.onColorChange, onSliderChange = _a.onSliderChange, sliderValue = _a.sliderValue, onStyleButtonClick = _a.onStyleButtonClick, onFontButtonClick = _a.onFontButtonClick;
    return (react_1.default.createElement(Board, null,
        react_1.default.createElement(MenuOption_1.default, { name: "Font" },
            react_1.default.createElement(Dropdown_1.default, { items: ui_1.FONT_STYLES, onClick: onFontButtonClick })),
        react_1.default.createElement(MenuOption_1.default, { name: "Size" },
            react_1.default.createElement(Slider_1.default, { onChange: onSliderChange, sliderRef: sliderRef, value: sliderValue })),
        react_1.default.createElement(MenuOption_1.default, { name: "Option" },
            react_1.default.createElement(EditorButton_1.default, { name: "bold", isShowing: false },
                react_1.default.createElement(fa_1.FaBold, null)),
            react_1.default.createElement(EditorButton_1.default, { name: "italic", isShowing: true },
                react_1.default.createElement(fa_1.FaItalic, null)),
            react_1.default.createElement(MenuButton_1.default, null,
                react_1.default.createElement(io_1.IoIosColorPalette, null),
                react_1.default.createElement(Input, { type: "Color", onChange: onColorChange })),
            react_1.default.createElement(EditorButton_1.default, { name: "underline", isShowing: false },
                react_1.default.createElement(fa_1.FaUnderline, null))),
        react_1.default.createElement(MenuOption_1.default, { name: "Sort" },
            react_1.default.createElement(EditorButton_1.default, { name: "justifyLeft", isShowing: false },
                react_1.default.createElement(ai_1.AiOutlineAlignLeft, null)),
            react_1.default.createElement(EditorButton_1.default, { name: "justifyCenter", isShowing: false },
                react_1.default.createElement(ai_1.AiOutlineAlignCenter, null)),
            react_1.default.createElement(EditorButton_1.default, { name: "justifyRight", isShowing: false },
                react_1.default.createElement(ai_1.AiOutlineAlignRight, null))),
        react_1.default.createElement(MenuOption_1.default, { name: "Effect" }, ui_1.TEXT_STYLES.map(function (item) { return (react_1.default.createElement(TextButton, { key: item, className: item, name: item, isClicked: item === fontStyle ? true : false, onClick: onStyleButtonClick }, "A")); }))));
};
var Board = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 16.5rem;\n  top: -2rem;\n  right: -15rem;\n  padding: 0.5rem;\n  background-color: #ffffff;\n  position: absolute;\n  font-family: \"Roboto\", sans-serif;\n  border-radius: 5px;\n  box-shadow: 1px 1px 7px #E0D9DC, -2px -2px 1px #FFFFFF;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: small;\n  z-index: 13;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 12rem;\n  height: 16.5rem;\n  top: -2rem;\n  right: -15rem;\n  padding: 0.5rem;\n  background-color: #ffffff;\n  position: absolute;\n  font-family: \"Roboto\", sans-serif;\n  border-radius: 5px;\n  box-shadow: 1px 1px 7px #E0D9DC, -2px -2px 1px #FFFFFF;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: small;\n  z-index: 13;\n"])));
var Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 20px;\n  opacity: 0;\n"], ["\n  position: absolute;\n  width: 20px;\n  opacity: 0;\n"])));
var TextButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  margin: 0 auto;\n  padding: 0.2rem 0.1rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #FB99BC;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  font-size: 21px;\n  border: 0px;\n  background-color: transparent;\n  ", ";\n\n  :hover {\n    background-color: #f3f0f0;\n  }\n\n  :active {\n    ", ";\n    color: #FC70A3;\n  }\n"], ["\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  margin: 0 auto;\n  padding: 0.2rem 0.1rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #FB99BC;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  font-size: 21px;\n  border: 0px;\n  background-color: transparent;\n  ", ";\n\n  :hover {\n    background-color: #f3f0f0;\n  }\n\n  :active {\n    ", ";\n    color: #FC70A3;\n  }\n"])), function (_a) {
    var isClicked = _a.isClicked;
    return isClicked ? BoxInnerShadow_1.BoxInnerShadow : BoxShadow_1.BoxShadow;
}, BoxInnerShadow_1.BoxInnerShadow);
exports.default = MenuBoard;
var templateObject_1, templateObject_2, templateObject_3;
