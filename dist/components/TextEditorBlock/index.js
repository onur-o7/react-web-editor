"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var bi_1 = require("react-icons/bi");
var gi_1 = require("react-icons/gi");
var md_1 = require("react-icons/md");
var CoordinatesTag_1 = __importDefault(require("../CoordinatesTag"));
var location_1 = require("../../constants/location");
var EditorBlockWrapper_1 = __importDefault(require("../shared/EditorBlockWrapper"));
var ui_1 = require("../../constants/ui");
var ui_2 = require("../../utils/ui");
var GuideLine_1 = __importDefault(require("../GuideLine"));
var Icon_1 = __importDefault(require("../Icon"));
var ResizeHandlerWrapper_1 = __importDefault(require("../shared/ResizeHandlerWrapper"));
var ui_3 = require("../../constants/ui");
var useColor_1 = __importDefault(require("../../hooks/useColor"));
var useDraggable_1 = __importDefault(require("../../hooks/useDraggable"));
var useMouseEvent_1 = __importDefault(require("../../hooks/useMouseEvent"));
var useSlider_1 = __importDefault(require("../../hooks/useSlider"));
var useResize_1 = __importDefault(require("../../hooks/useResize"));
var useText_1 = __importDefault(require("../../hooks/useText"));
var TextEditor_1 = __importDefault(require("../TextEditor"));
var TextEditorBlock = function (_a) {
    var left = _a.left, top = _a.top, width = _a.width, height = _a.height, parentStyle = _a.parentStyle, unit = _a.unit, initialFontSize = _a.initialFontSize, initialFontColor = _a.initialFontColor, initialFontStyle = _a.initialFontStyle, initialText = _a.initialText, initialFontName = _a.initialFontName;
    var innerHtml = initialText && ui_2.generateHtml(initialText);
    var _b = react_1.useState(innerHtml || ui_3.INITIAL_TEXT), html = _b[0], setHtml = _b[1];
    var _c = react_1.useState({
        top: top,
        left: left,
        width: width,
        height: height,
    }), componentStyle = _c[0], setComponentStyle = _c[1];
    var handleMouseDown = useResize_1.default(__assign(__assign({}, componentStyle), { unit: unit, onResize: setComponentStyle, resizeBoardOption: parentStyle })).handleMouseDown;
    var _d = useMouseEvent_1.default(), isMouseOver = _d.isMouseOver, handleMouseLeave = _d.handleMouseLeave, handleMouseOver = _d.handleMouseOver;
    var _e = useText_1.default({
        html: html,
        onChange: setHtml,
        initialFontName: initialFontName,
        initialFontStyle: initialFontStyle,
        initialText: initialText,
    }), textRef = _e.textRef, handleInputChange = _e.handleInputChange, innerHTML = _e.innerHTML, handleEditingMode = _e.handleEditingMode, isEditing = _e.isEditing, fontStyle = _e.fontStyle, handleStyleButtonClick = _e.handleStyleButtonClick, handleFontButtonClick = _e.handleFontButtonClick, fontName = _e.fontName;
    var _f = useDraggable_1.default(__assign(__assign({}, componentStyle), { onDrag: setComponentStyle, dragBoardOption: parentStyle, unit: unit })), handleDragStart = _f.handleDragStart, handleDragEnd = _f.handleDragEnd;
    var _g = useColor_1.default({ initialColor: initialFontColor }), handleFontColorChange = _g.handleFontColorChange, color = _g.color;
    var _h = useSlider_1.default({ max: ui_3.SLIDER_MAX, initialValue: initialFontSize }), sliderRef = _h.sliderRef, value = _h.value, handleValueChange = _h.handleValueChange;
    return (react_1.default.createElement(EditorBlockWrapper_1.default, { top: componentStyle.top, left: componentStyle.left, width: componentStyle.width, height: componentStyle.height, unit: unit, onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave },
        isMouseOver &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ButtonHandler, null),
                !isEditing && (react_1.default.createElement(Icon_1.default, { top: ui_1.FIRST_EDITOR_ICON_TOP, right: ui_1.EDITOR_ICON_RIGHT, onMouseDown: handleDragStart, onMouseUp: handleDragEnd },
                    react_1.default.createElement(gi_1.GiMove, null))),
                react_1.default.createElement(Icon_1.default, { top: isEditing ? ui_1.FIRST_EDITOR_ICON_TOP : ui_1.SECOND_EDITOR_ICON_TOP, right: ui_1.EDITOR_ICON_RIGHT, onClick: handleEditingMode }, isEditing ? react_1.default.createElement(md_1.MdExitToApp, null) : react_1.default.createElement(bi_1.BiText, null)),
                react_1.default.createElement(ResizeHandlerWrapper_1.default, null, location_1.DIRECTIIONS.map(function (item) { return (react_1.default.createElement("div", { key: item, className: item, onMouseDown: handleMouseDown })); })),
                react_1.default.createElement(CoordinatesTag_1.default, { top: componentStyle.top, left: componentStyle.left, unit: unit }),
                react_1.default.createElement(GuideLine_1.default, { width: componentStyle.width, height: componentStyle.height, top: componentStyle.top, left: componentStyle.left, boardWidth: parentStyle && parentStyle.width, boardHeight: parentStyle && parentStyle.height, unit: unit })),
        react_1.default.createElement(TextEditor_1.default, { html: innerHTML, fontStyle: fontStyle, onChange: handleInputChange, componentRef: textRef, isEditing: isEditing, onColorChange: handleFontColorChange, sliderRef: sliderRef, sliderValue: value, onSliderChange: handleValueChange, onStyleButtonClick: handleStyleButtonClick, onFontButtonClick: handleFontButtonClick, fontName: fontName, color: color })));
};
var ButtonHandler = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  top: 0;\n  right: -20px;\n  width: 50px;\n  height: 100%;\n  position: absolute;\n"], ["\n  top: 0;\n  right: -20px;\n  width: 50px;\n  height: 100%;\n  position: absolute;\n"])));
exports.default = TextEditorBlock;
var templateObject_1;
