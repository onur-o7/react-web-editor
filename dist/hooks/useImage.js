"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useImage = function (_a) {
    var initialImage = _a.initialImage;
    var _b = react_1.useState(initialImage || ""), imageSrc = _b[0], setImageSrc = _b[1];
    var handleFileChange = function (ev) {
        var files = ev.target.files;
        if (!files) {
            return;
        }
        Object.values(files).forEach(function (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", function () {
                if (!(reader.result instanceof ArrayBuffer) && reader.result) {
                    setImageSrc(reader.result);
                }
            });
        });
    };
    return { imageSrc: imageSrc, handleFileChange: handleFileChange };
};
exports.default = useImage;
