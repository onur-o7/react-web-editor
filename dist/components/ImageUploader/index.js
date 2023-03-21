"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var CustomInput_1 = __importDefault(require("../CustomInput"));
var ImageUploader = function (_a) {
    var onChange = _a.onChange, left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right;
    return (react_1.default.createElement(CustomInput_1.default, { type: "file", accept: "image/*", onChange: onChange, top: top, right: right, left: left, bottom: bottom },
        react_1.default.createElement(bs_1.BsImages, null)));
};
exports.default = ImageUploader;
