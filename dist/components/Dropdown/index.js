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
var bi_1 = require("react-icons/bi");
var ui_1 = require("../../constants/ui");
var useDropDown_1 = __importDefault(require("../../hooks/useDropDown"));
var BoxInnerShadow_1 = require("../../theme/BoxInnerShadow");
var DropDown = function (_a) {
    var items = _a.items, onClick = _a.onClick;
    var _b = useDropDown_1.default({ items: items }), handleItemClick = _b.handleItemClick, handleDropDownClick = _b.handleDropDownClick, isDropDownOpen = _b.isDropDownOpen, selectedItem = _b.selectedItem;
    var handleDropDownListClick = function (ev) {
        handleItemClick(ev);
        onClick && onClick(ev);
    };
    return (react_1.default.createElement(DropDownBoard, null,
        react_1.default.createElement(DropDownHeader, { onClick: handleDropDownClick },
            selectedItem.label.length === 0 ? ui_1.DEFAULT_DROP_DOWN_MESSAGE : selectedItem.label,
            react_1.default.createElement(DropDownIcon, { isDropDownOpen: isDropDownOpen },
                react_1.default.createElement(bi_1.BiChevronRight, null))),
        react_1.default.createElement(DropDownList, { isDropDownOpen: isDropDownOpen }, items.map(function (item) { return (react_1.default.createElement(DropDownItem, { onClick: handleDropDownListClick, id: item.id, key: item.id, className: item.id, isSelected: item.id === selectedItem.id },
            react_1.default.createElement(DropDownItemDot, { isSelected: item.id === selectedItem.id }, "\u2022"),
            item.label)); }))));
};
var DropDownBoard = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 10rem;\n  border-radius: 5px;\n  background-color: #f8f8f6;\n  font-size: 0.8rem;\n  z-index: 10;\n"], ["\n  width: 10rem;\n  border-radius: 5px;\n  background-color: #f8f8f6;\n  font-size: 0.8rem;\n  z-index: 10;\n"])));
var DropDownHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 10rem;\n  height: 1.8rem;\n  margin: 0.2rem 0 0 0;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n  ", ";\n"], ["\n  display: flex;\n  width: 10rem;\n  height: 1.8rem;\n  margin: 0.2rem 0 0 0;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n  ", ";\n"])), BoxInnerShadow_1.BoxInnerShadow);
var DropDownList = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 12rem;\n  display: ", ";\n  padding: 5px;\n  background-color: #fdfdfd;\n  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  position: absolute;\n"], ["\n  width: 12rem;\n  display: ", ";\n  padding: 5px;\n  background-color: #fdfdfd;\n  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  position: absolute;\n"])), function (_a) {
    var isDropDownOpen = _a.isDropDownOpen;
    return isDropDownOpen ? "block" : "none";
});
var DropDownIcon = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #91A5BE;\n  transform: ", ";\n  transition: all .2s ease-in-out;\n"], ["\n  color: #91A5BE;\n  transform: ", ";\n  transition: all .2s ease-in-out;\n"])), function (_a) {
    var isDropDownOpen = _a.isDropDownOpen;
    return isDropDownOpen ? "rotate(90deg)" : "rotate(0deg)";
});
var DropDownItem = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 10px;\n  font-weight: 1000;\n  font-size: 25px;\n  border-radius: 10px;\n  ", ";\n\n  :hover {\n    cursor: pointer;\n    ", ";\n  }\n"], ["\n  padding: 10px;\n  font-weight: 1000;\n  font-size: 25px;\n  border-radius: 10px;\n  ", ";\n\n  :hover {\n    cursor: pointer;\n    ", ";\n  }\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected && BoxInnerShadow_1.BoxInnerShadow;
}, BoxInnerShadow_1.BoxInnerShadow);
var DropDownItemDot = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-right: 5px;\n  opacity: ", ";\n  font-family: \"roboto\", serif !important;\n  color: #fac9db;\n  transition: all .2s ease-in-out;\n"], ["\n  padding-right: 5px;\n  opacity: ", ";\n  font-family: \"roboto\", serif !important;\n  color: #fac9db;\n  transition: all .2s ease-in-out;\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected ? 1 : 0;
});
exports.default = DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
