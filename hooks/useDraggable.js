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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ui_1 = require("../utils/ui");
var useDraggable = function (_a) {
    var left = _a.left, top = _a.top, onDrag = _a.onDrag, width = _a.width, height = _a.height, dragBoardOption = _a.dragBoardOption, unit = _a.unit;
    var _b = react_1.useState({
        currentX: left || 0,
        currentY: top || 0,
        isDragging: false,
    }), componentInfomation = _b[0], setComponentInformation = _b[1];
    react_1.useEffect(function () {
        if (!componentInfomation.isDragging) {
            return;
        }
        var handleDragMove = function (ev) {
            var currentX = componentInfomation.currentX, currentY = componentInfomation.currentY, isDragging = componentInfomation.isDragging;
            if (!isDragging || !currentX || !currentY) {
                return;
            }
            var _a = ui_1.convertPointsByUnit(unit, ev.clientX, ev.clientY), clientX = _a.clientX, clientY = _a.clientY;
            var _b = ui_1.getBoundPosition(clientX, clientY, currentX, currentY, width, height, dragBoardOption), left = _b.left, top = _b.top;
            onDrag(function (prev) { return (__assign(__assign({}, prev), { left: left, top: top })); });
        };
        document.addEventListener("mousemove", handleDragMove);
        return function () { return document.removeEventListener("mousemove", handleDragMove); };
    }, [componentInfomation, dragBoardOption, height, onDrag, width, unit]);
    var handleDragStart = function (ev) {
        var _a = ui_1.convertPointsByUnit(unit, ev.clientX, ev.clientY), clientX = _a.clientX, clientY = _a.clientY;
        var currentX = clientX - left;
        var currentY = clientY - top;
        setComponentInformation(function (prev) { return (__assign(__assign({}, prev), { isDragging: true, currentX: currentX, currentY: currentY })); });
    };
    var handleDragEnd = function () {
        setComponentInformation(function (prev) { return (__assign(__assign({}, prev), { isDragging: false })); });
    };
    return {
        handleDragEnd: handleDragEnd,
        handleDragStart: handleDragStart,
        isDragging: componentInfomation.isDragging,
    };
};
exports.default = useDraggable;
