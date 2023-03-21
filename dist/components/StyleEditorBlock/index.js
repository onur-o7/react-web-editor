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
var ColorPicker_1 = __importDefault(require("../ColorPicker"));
var EditorBlock_1 = __importDefault(require("../EditorBlock"));
var ui_1 = require("../../constants/ui");
var ImageUploader_1 = __importDefault(require("../ImageUploader"));
var useColor_1 = __importDefault(require("../../hooks/useColor"));
var useImage_1 = __importDefault(require("../../hooks/useImage"));
var useMouseEvent_1 = __importDefault(require("../../hooks/useMouseEvent"));
var StyleEditorBlock = function (_a) {
    var width = _a.width, height = _a.height, top = _a.top, left = _a.left, parentStyle = _a.parentStyle, unit = _a.unit, children = _a.children, initialColor = _a.initialColor, initialImage = _a.initialImage;
    var _b = useImage_1.default({ initialImage: initialImage }), imageSrc = _b.imageSrc, handleFileChange = _b.handleFileChange;
    var _c = useColor_1.default({ initialColor: initialColor }), color = _c.color, handleColorChange = _c.handleColorChange;
    var _d = useMouseEvent_1.default(), isClicked = _d.isClicked, isMouseOver = _d.isMouseOver, handleMouseClick = _d.handleMouseClick, handleMouseOver = _d.handleMouseOver, handleMouseLeave = _d.handleMouseLeave, componentRef = _d.componentRef;
    return (react_1.default.createElement(EditorBlock_1.default, { componentRef: componentRef, width: width, height: height, top: top, left: left, unit: unit, parentStyle: parentStyle, onMouseClick: handleMouseClick, onMouseOver: handleMouseOver, onMouseLeave: handleMouseLeave, isMouseOver: isMouseOver, isClicked: isClicked },
        isMouseOver && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ImageUploader_1.default, { onChange: handleFileChange, top: ui_1.FIRST_EDITOR_ICON_TOP, right: ui_1.EDITOR_ICON_RIGHT }),
            react_1.default.createElement(ColorPicker_1.default, { onChange: handleColorChange, top: ui_1.SECOND_EDITOR_ICON_TOP, right: ui_1.EDITOR_ICON_RIGHT, value: color }))),
        imageSrc && react_1.default.createElement(UploadedImage, { src: imageSrc }),
        react_1.default.createElement(CustomBlock, { color: color }, children && children)));
};
var CustomBlock = styled_components_1.default.div.attrs(function (_a) {
    var color = _a.color;
    return ({
        style: {
            backgroundColor: color.length !== 0 && color,
        },
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n"])));
var UploadedImage = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 8;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 8;\n"])));
exports.default = StyleEditorBlock;
var templateObject_1, templateObject_2;
