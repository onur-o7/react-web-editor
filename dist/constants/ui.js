"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_STYLES = exports.FONT_STYLE = exports.DEFAULT_SLIDER_VALUE = exports.TEXT_STYLES = exports.BUBBLE_SHADOW_TEXT = exports.OUT_LINE_TEXT = exports.DOWN_SIDE_TEXT = exports.BOX_TEXT = exports.TWIN_COLOR_TEXT = exports.EDITOR_ICON_RIGHT = exports.SECOND_EDITOR_ICON_TOP = exports.FIRST_EDITOR_ICON_TOP = exports.SANITIZE_CONFIGURATION = exports.SLIDER_MAX = exports.SLIDER_MIN = exports.DEFAULT_DROP_DOWN_MESSAGE = exports.MIN_HEIGHT = exports.MIN_WIDTH = exports.INITIAL_TEXT = void 0;
exports.INITIAL_TEXT = "<p>TEXT<p>";
exports.MIN_WIDTH = 1;
exports.MIN_HEIGHT = 1;
exports.DEFAULT_DROP_DOWN_MESSAGE = "Select Font";
exports.SLIDER_MIN = 0;
exports.SLIDER_MAX = 1;
exports.SANITIZE_CONFIGURATION = {
    allowedTags: ["b", "i", "em", "p", "div"],
};
exports.FIRST_EDITOR_ICON_TOP = 0;
exports.SECOND_EDITOR_ICON_TOP = 22;
exports.EDITOR_ICON_RIGHT = -21;
exports.TWIN_COLOR_TEXT = "twin-color-text";
exports.BOX_TEXT = "box-text";
exports.DOWN_SIDE_TEXT = "down-side-text";
exports.OUT_LINE_TEXT = "out-line-text";
exports.BUBBLE_SHADOW_TEXT = "bubble-shadow-text";
exports.TEXT_STYLES = [exports.DOWN_SIDE_TEXT, exports.TWIN_COLOR_TEXT, exports.OUT_LINE_TEXT, exports.BOX_TEXT, exports.BUBBLE_SHADOW_TEXT];
exports.DEFAULT_SLIDER_VALUE = 0.2;
exports.FONT_STYLE = {
    Andada: "andada-pro",
    BebasNenu: "bebas-nenu",
    MonteCarlo: "montecarlo",
    Roboto: "roboto",
    STIXTwoText: "stix-two-text",
    StyleScript: "style-script",
};
exports.FONT_STYLES = [
    { id: "andada-pro", label: "Andada" },
    { id: "bebas-nenu", label: "BebasNenu" },
    { id: "montecarlo", label: "MonteCarlo" },
    { id: "roboto", label: "Roboto" },
    { id: "stix-two-text", label: "STIXTwoText" },
    { id: "style-script", label: "StyleScript" },
];
