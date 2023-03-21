"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MenuButton_1 = __importDefault(require("../shared/MenuButton"));
var EditorButton = function (_a) {
    var name = _a.name, isShowing = _a.isShowing, value = _a.value, children = _a.children;
    var handleTextStyleChange = function (ev) {
        ev.preventDefault();
        document.execCommand(name, isShowing, value);
    };
    return (react_1.default.createElement(MenuButton_1.default, { onMouseDown: handleTextStyleChange }, children));
};
exports.default = EditorButton;
