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
var useEditorBoard = function () {
    var _a = react_1.useState({
        width: 0,
        height: 0,
        left: 0,
        top: 0,
    }), editorBoardStyle = _a[0], setEditorBoardStyle = _a[1];
    var measuredRef = react_1.useCallback(function (node) {
        if (node !== null) {
            var currentLocation_1 = node.getBoundingClientRect();
            var currentOffsetY_1 = window.pageYOffset;
            var currentOffsetX_1 = window.pageXOffset;
            setEditorBoardStyle(function (prev) { return (__assign(__assign({}, prev), { width: currentLocation_1.width, height: currentLocation_1.height, top: currentLocation_1.top + currentOffsetY_1, left: currentLocation_1.left + currentOffsetX_1 })); });
        }
    }, []);
    return {
        measuredRef: measuredRef,
        editorBoardStyle: editorBoardStyle,
    };
};
exports.default = useEditorBoard;
