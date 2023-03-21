"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMouseEvent = function () {
    var _a = react_1.useState(false), isClicked = _a[0], setIsClicked = _a[1];
    var _b = react_1.useState(false), isMouseOver = _b[0], setIsMouseOver = _b[1];
    var componentRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var handleComponentOutsideClick = function (ev) {
            var _a;
            var target = ev.target;
            if (!((_a = componentRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
                setIsClicked(false);
            }
        };
        document.addEventListener("click", handleComponentOutsideClick);
        return function () { return document.removeEventListener("click", handleComponentOutsideClick); };
    }, []);
    var handleMouseClick = function () {
        setIsClicked(true);
    };
    var handleMouseUp = function () {
        setIsClicked(false);
    };
    var handleMouseOver = function () {
        setIsMouseOver(true);
    };
    var handleMouseLeave = function () {
        setIsMouseOver(false);
    };
    return {
        isClicked: isClicked,
        isMouseOver: isMouseOver,
        handleMouseClick: handleMouseClick,
        handleMouseOver: handleMouseOver,
        handleMouseLeave: handleMouseLeave,
        handleMouseUp: handleMouseUp,
        onClicked: setIsClicked,
        componentRef: componentRef,
    };
};
exports.default = useMouseEvent;
