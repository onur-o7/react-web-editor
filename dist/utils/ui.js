"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHtml = exports.convertPointsToPixel = exports.convertPointsByUnit = exports.isLocatedCenter = exports.calculateCenter = exports.changeComponentLocationByHandler = exports.generateDraggedList = exports.getBoundPosition = void 0;
var location_1 = require("../constants/location");
var getBoundingZone = function (_a) {
    var _b = _a.left, left = _b === void 0 ? 0 : _b, _c = _a.top, top = _c === void 0 ? 0 : _c, _d = _a.width, width = _d === void 0 ? 0 : _d, _e = _a.height, height = _e === void 0 ? 0 : _e;
    var right = left + width;
    var bottom = top + height;
    return { left: left, top: top, right: right, bottom: bottom };
};
var getBoundPosition = function (clientX, clientY, x, y, width, height, parentLocation) {
    var currentX = clientX - x;
    var currentY = clientY - y;
    if (!parentLocation || !width || !height) {
        return { left: currentX, top: currentY };
    }
    var parentWidth = parentLocation.width, parentHeight = parentLocation.height;
    var _a = getBoundingZone({ left: currentX, top: currentY, width: width, height: height }), currentRight = _a.right, currentBottom = _a.bottom;
    if (currentX < 0.1) {
        currentX = 0.1;
    }
    if (currentY < 0.1) {
        currentY = 0.1;
    }
    if (currentRight > parentWidth) {
        currentX = parentWidth - width;
    }
    if (currentBottom > parentHeight) {
        currentY = parentHeight - height;
    }
    return { left: currentX, top: currentY };
};
exports.getBoundPosition = getBoundPosition;
var generateDraggedList = function (items, startPoint, endPoint) {
    var draggedItem = items[startPoint];
    var remainingItems = items.filter(function (_, index) { return index !== startPoint; });
    return __spreadArray(__spreadArray(__spreadArray([], remainingItems.slice(0, endPoint)), [
        draggedItem
    ]), remainingItems.slice(endPoint));
};
exports.generateDraggedList = generateDraggedList;
var changeComponentLocationByHandler = function (handlerType, left, top, width, height, differenceX, differenceY, parentLocation) {
    var newLeft = left;
    var newTop = top;
    var newWidth = width;
    var newHeight = height;
    switch (handlerType) {
        case location_1.DIRECTION.TOP_LEFT:
            newLeft += differenceX;
            newTop += differenceY;
            newWidth -= differenceX;
            newHeight -= differenceY;
            break;
        case location_1.DIRECTION.TOP_RIGHT:
            newTop += differenceY;
            newWidth += differenceX;
            newHeight -= differenceY;
            break;
        case location_1.DIRECTION.BOTTOM_LEFT:
            newLeft += differenceX;
            newWidth -= differenceX;
            newHeight += differenceY;
            break;
        case location_1.DIRECTION.BOTTOM_RIGHT:
            newWidth += differenceX;
            newHeight += differenceY;
            break;
        default:
            break;
    }
    if (!parentLocation) {
        return {
            newLeft: newLeft,
            newTop: newTop,
            newWidth: newWidth,
            newHeight: newHeight,
        };
    }
    var parentWidth = parentLocation.width, parentHeight = parentLocation.height;
    if (newLeft < 0.1) {
        newLeft = 0.1;
    }
    if (newTop < 0.1) {
        newTop = 0.1;
    }
    if (newLeft + newWidth > parentWidth) {
        newWidth = parentWidth - newLeft;
    }
    if (newTop + newHeight > parentHeight) {
        newHeight = parentHeight - newTop;
    }
    return {
        newLeft: newLeft,
        newTop: newTop,
        newWidth: newWidth,
        newHeight: newHeight,
    };
};
exports.changeComponentLocationByHandler = changeComponentLocationByHandler;
var calculateCenter = function (width, height, top, left) {
    var centerX = width / 2;
    var centerY = height / 2;
    if (left) {
        centerX += left;
    }
    if (top) {
        centerY += top;
    }
    return {
        centerX: centerX,
        centerY: centerY,
    };
};
exports.calculateCenter = calculateCenter;
var isLocatedCenter = function (width, height, top, left, boardWidth, boardHeight) {
    var screenWidth = boardWidth || window.screen.width;
    var screenHeight = boardHeight || window.screen.height;
    var _a = exports.calculateCenter(width, height, top, left), centerX = _a.centerX, centerY = _a.centerY;
    var isCenterX = false;
    var isCenterY = false;
    if (screenWidth / 2 === centerX) {
        isCenterX = true;
    }
    if (screenHeight / 2 === centerY) {
        isCenterY = true;
    }
    return {
        isCenterX: isCenterX,
        isCenterY: isCenterY,
    };
};
exports.isLocatedCenter = isLocatedCenter;
var convertPointsByUnit = function (unit, x, y) {
    var clientX = x;
    var clientY = y;
    switch (unit) {
        case "rem":
            clientX = clientX * 0.0625;
            clientY = clientY * 0.0625;
            break;
        default:
            break;
    }
    return { clientX: clientX, clientY: clientY };
};
exports.convertPointsByUnit = convertPointsByUnit;
var convertPointsToPixel = function (unit, x, y) {
    var clientX = x;
    var clientY = y;
    switch (unit) {
        case "rem":
            clientX = clientX / 0.0625;
            clientY = clientY / 0.0625;
            break;
        default:
            break;
    }
    return { clientX: clientX, clientY: clientY };
};
exports.convertPointsToPixel = convertPointsToPixel;
var generateHtml = function (text) {
    return "<p>" + text + "<p>";
};
exports.generateHtml = generateHtml;
