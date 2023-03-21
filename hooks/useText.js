"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var sanitize_html_1 = __importDefault(require("sanitize-html"));
var ui_1 = require("../constants/ui");
var useText = function (_a) {
    var html = _a.html, onChange = _a.onChange, _b = _a.initialFontStyle, initialFontStyle = _b === void 0 ? "" : _b, _c = _a.initialFontName, initialFontName = _c === void 0 ? "" : _c, initialText = _a.initialText;
    var _d = react_1.useState(initialText || ui_1.INITIAL_TEXT), savedHtml = _d[0], setSavedHtml = _d[1];
    var _e = react_1.useState(false), isEditing = _e[0], setIsEditing = _e[1];
    var _f = react_1.useState(initialFontName), fontName = _f[0], setFontName = _f[1];
    var _g = react_1.useState(initialFontStyle), fontStyle = _g[0], setFontStyle = _g[1];
    var textRef = react_1.useRef(null);
    var handleInputChange = function () {
        if (!textRef.current) {
            return;
        }
        var currentHtml = textRef.current.innerHTML;
        if (!currentHtml || currentHtml === savedHtml) {
            return;
        }
        onChange(html);
        setSavedHtml(sanitize_html_1.default(currentHtml, ui_1.SANITIZE_CONFIGURATION));
    };
    var handleEditingMode = function () {
        setIsEditing(function (prev) { return !prev; });
    };
    var handleStyleButtonClick = function (ev) {
        var targetName = ev.currentTarget.name;
        if (targetName === fontStyle) {
            setFontStyle("");
            return;
        }
        setFontStyle(targetName);
    };
    var handleFontButtonClick = function (ev) {
        var targetName = ev.currentTarget.id;
        setFontName(targetName);
    };
    return {
        textRef: textRef,
        handleInputChange: handleInputChange,
        innerHTML: { __html: html },
        handleEditingMode: handleEditingMode,
        isEditing: isEditing,
        fontStyle: fontStyle,
        handleStyleButtonClick: handleStyleButtonClick,
        handleFontButtonClick: handleFontButtonClick,
        fontName: fontName,
    };
};
exports.default = useText;
