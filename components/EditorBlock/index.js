"use strict";
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
var CoordinatesTag_1 = __importDefault(require("../CoordinatesTag"));
var location_1 = require("../../constants/location");
var DraggableHandler_1 = __importDefault(require("../shared/DraggableHandler"));
var EditorBlockWrapper_1 = __importDefault(require("../shared/EditorBlockWrapper"));
var GuideLine_1 = __importDefault(require("../GuideLine"));
var ResizeHandlerWrapper_1 = __importDefault(require("../shared/ResizeHandlerWrapper"));
var useDraggable_1 = __importDefault(require("../../hooks/useDraggable"));
var useResize_1 = __importDefault(require("../../hooks/useResize"));
var EditorBlock = function (_a) {
    var width = _a.width, height = _a.height, top = _a.top, left = _a.left, parentStyle = _a.parentStyle, children = _a.children, onMouseClick = _a.onMouseClick, onMouseOver = _a.onMouseOver, onMouseLeave = _a.onMouseLeave, isMouseOver = _a.isMouseOver, isClicked = _a.isClicked, componentRef = _a.componentRef, unit = _a.unit;
    var _b = react_1.useState({
        width: width,
        height: height,
        top: top,
        left: left,
    }), componentStyle = _b[0], setComponentStyle = _b[1];
    var handleMouseDown = useResize_1.default(__assign(__assign({ unit: unit }, componentStyle), { onResize: setComponentStyle, resizeBoardOption: parentStyle })).handleMouseDown;
    var _c = useDraggable_1.default(__assign(__assign({}, componentStyle), { onDrag: setComponentStyle, dragBoardOption: parentStyle, unit: unit })), handleDragStart = _c.handleDragStart, handleDragEnd = _c.handleDragEnd;
    return (react_1.default.createElement(EditorBlockWrapper_1.default, { width: componentStyle.width, height: componentStyle.height, top: componentStyle.top, left: componentStyle.left, onClick: onMouseClick, onMouseOver: onMouseOver, onMouseLeave: onMouseLeave, ref: componentRef, unit: unit },
        isClicked &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(DraggableHandler_1.default, { onMouseDown: handleDragStart, onMouseUp: handleDragEnd }),
                react_1.default.createElement(ResizeHandlerWrapper_1.default, null, location_1.DIRECTIIONS.map(function (item) { return (react_1.default.createElement("div", { key: item, className: item, onMouseDown: handleMouseDown })); }))),
        isMouseOver && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CoordinatesTag_1.default, { top: componentStyle.top, left: componentStyle.left, unit: unit }),
            react_1.default.createElement(GuideLine_1.default, { width: componentStyle.width, height: componentStyle.height, top: componentStyle.top, left: componentStyle.left, boardWidth: parentStyle && parentStyle.width, boardHeight: parentStyle && parentStyle.height, unit: unit }))),
        children));
};
exports.default = EditorBlock;
