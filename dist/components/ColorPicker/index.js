"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var io_1 = require("react-icons/io");
var CustomInput_1 = __importDefault(require("../CustomInput"));
var ColorPicker = function (_a) {
    var onChange = _a.onChange, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right, value = _a.value;
    return (react_1.default.createElement(CustomInput_1.default, { type: "color", onChange: onChange, top: top, right: right, left: left, bottom: bottom, value: value !== "#00ff0000" ? value : "#ffffff" },
        react_1.default.createElement(io_1.IoIosColorPalette, null)));
};
exports.default = ColorPicker;
