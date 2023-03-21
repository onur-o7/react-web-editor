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
var ui_2 = require("../constants/ui");
var useResize = function (_a) {
    var width = _a.width, height = _a.height, top = _a.top, left = _a.left, onResize = _a.onResize, resizeBoardOption = _a.resizeBoardOption, unit = _a.unit;
    var _b = react_1.useState({
        isResizing: false,
        direction: "",
        currentX: 0,
        currentY: 0,
    }), componentInformation = _b[0], setComponentInformation = _b[1];
    react_1.useEffect(function () {
        if (!componentInformation.isResizing) {
            return;
        }
        var handleMouseMove = function (ev) {
            ev.stopPropagation();
            var _a = ui_1.convertPointsByUnit(unit, ev.clientX, ev.clientY), clientX = _a.clientX, clientY = _a.clientY;
            var currentX = componentInformation.currentX, currentY = componentInformation.currentY, direction = componentInformation.direction;
            var deltaX = clientX - currentX;
            var deltaY = clientY - currentY;
            var _b = ui_1.changeComponentLocationByHandler(direction, left, top, width, height, deltaX, deltaY, resizeBoardOption), newWidth = _b.newWidth, newHeight = _b.newHeight, newLeft = _b.newLeft, newTop = _b.newTop;
            if (newWidth < ui_2.MIN_WIDTH || newHeight < ui_2.MIN_HEIGHT) {
                return;
            }
            onResize(function (prev) { return (__assign(__assign({}, prev), { width: newWidth, height: newHeight, left: newLeft, top: newTop })); });
            setComponentInformation(function (prev) { return (__assign(__assign({}, prev), { currentX: clientX, currentY: clientY })); });
        };
        var handleMouseUp = function () {
            setComponentInformation(function (prev) { return (__assign(__assign({}, prev), { direction: "", isResizing: false })); });
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return function () {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [componentInformation, onResize, width, top, left, height, resizeBoardOption, unit]);
    var handleMouseDown = function (ev) {
        ev.preventDefault();
        var className = ev.currentTarget.className;
        var _a = ui_1.convertPointsByUnit(unit, ev.clientX, ev.clientY), clientX = _a.clientX, clientY = _a.clientY;
        setComponentInformation(function (prev) { return (__assign(__assign({}, prev), { isResizing: true, direction: className, currentX: clientX, currentY: clientY })); });
    };
    return {
        handleMouseDown: handleMouseDown,
        isResizing: componentInformation.isResizing,
    };
};
exports.default = useResize;
