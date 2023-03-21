"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDropDown = function (_a) {
    var items = _a.items;
    var _b = react_1.useState(false), isDropDownOpen = _b[0], setIsDropDownOpen = _b[1];
    var _c = react_1.useState({
        id: "",
        label: "",
    }), selectedItem = _c[0], setSelectedItem = _c[1];
    var handleDropDownClick = function () {
        setIsDropDownOpen(function (prev) { return !prev; });
    };
    var handleItemClick = function (ev) {
        var id = ev.currentTarget.id;
        var item = items.find(function (item) { return item.id === id; });
        if (item) {
            setSelectedItem(item);
        }
    };
    return {
        handleItemClick: handleItemClick,
        handleDropDownClick: handleDropDownClick,
        isDropDownOpen: isDropDownOpen,
        selectedItem: selectedItem,
    };
};
exports.default = useDropDown;
