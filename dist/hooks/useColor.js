"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useColor = function (_a) {
    var initialColor = _a.initialColor;
    var _b = react_1.useState(initialColor || "#00ff0000"), color = _b[0], setColor = _b[1];
    var handleColorChange = function (ev) {
        setColor(ev.target.value);
    };
    var handleFontColorChange = function (ev) {
        ev.preventDefault();
        handleColorChange(ev);
        document.execCommand("foreColor", false, color);
    };
    return {
        color: color,
        handleColorChange: handleColorChange,
        handleFontColorChange: handleFontColorChange,
    };
};
exports.default = useColor;
