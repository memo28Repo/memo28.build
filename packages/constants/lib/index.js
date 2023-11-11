"use strict";
/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-21 21:45:16
 * @LastEditTime: 2023-11-01 20:43:56
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/index.ts
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANT = void 0;
__exportStar(require("./enum/code"), exports);
var constant_1 = require("./enum/constant");
Object.defineProperty(exports, "CONSTANT", { enumerable: true, get: function () { return constant_1.CONSTANT; } });
__exportStar(require("./local/auth"), exports);
