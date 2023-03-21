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
var useDragAndDrop = function (_a) {
    var items = _a.items;
    var _b = react_1.useState(items), dragList = _b[0], setDragList = _b[1];
    var _c = react_1.useState({
        startPoint: null,
        endPoint: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [],
        componentSize: {
            width: 0,
            height: 0,
        }
    }), dragListInformation = _c[0], setDragListInformation = _c[1];
    var handleDragStart = function (ev) {
        var initialPosition = Number(ev.currentTarget.id);
        var currentComponent = ev.currentTarget.getBoundingClientRect();
        setDragListInformation(function (prev) { return (__assign(__assign({}, prev), { startPoint: initialPosition, isDragging: true, originalOrder: dragList, componentSize: {
                width: currentComponent.width,
                height: currentComponent.height,
            } })); });
    };
    var handleDragOver = function (ev) {
        ev.preventDefault();
        var oldDragList = dragListInformation.originalOrder;
        var draggedFrom = dragListInformation.startPoint;
        var draggedTo = Number(ev.currentTarget.id);
        if (!draggedFrom && draggedFrom !== 0) {
            return;
        }
        var newDragList = ui_1.generateDraggedList(oldDragList, draggedFrom, draggedTo);
        if (draggedTo !== dragListInformation.endPoint) {
            setDragListInformation(function (prev) { return (__assign(__assign({}, prev), { updatedOrder: newDragList, endPoint: draggedTo })); });
        }
    };
    var handleDropDown = function () {
        setDragList(dragListInformation.updatedOrder);
        setDragListInformation(function (prev) { return (__assign(__assign({}, prev), { endPoint: null })); });
    };
    var handleDragLeave = function () {
        setDragListInformation(function (prev) { return (__assign(__assign({}, prev), { endPoint: null })); });
    };
    return {
        handleDragStart: handleDragStart,
        handleDragOver: handleDragOver,
        handleDropDown: handleDropDown,
        handleDragLeave: handleDragLeave,
        dragList: dragList,
        endPoint: dragListInformation.endPoint,
        startPoint: dragListInformation.startPoint,
        isDragging: dragListInformation.isDragging,
        componentSize: dragListInformation.componentSize,
    };
};
exports.default = useDragAndDrop;
