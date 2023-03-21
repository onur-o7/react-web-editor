"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ui_1 = require("../constants/ui");
var useSlider = function (_a) {
    var max = _a.max, initialValue = _a.initialValue;
    var _b = react_1.useState(initialValue || ui_1.DEFAULT_SLIDER_VALUE), value = _b[0], setValue = _b[1];
    var sliderRef = react_1.useRef(null);
    var handleValueChange = function () {
        if (!sliderRef.current) {
            return;
        }
        var currentValue = Number(sliderRef.current.value);
        setValue(currentValue * max);
    };
    return {
        sliderRef: sliderRef,
        value: value,
        handleValueChange: handleValueChange,
    };
};
exports.default = useSlider;
