"use strict";
/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:05:34
 * @LastEditTime: 2023-12-09 10:15:04
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/textDirection.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDirection = void 0;
/**
 *
 * 文本流动的方向
 *
 * @public
 *
 */
class TextDirection {
    constructor() {
        /**
         * 文本从右向左排列
         *
         * @public
         *
         */
        this.rtl = 'rtl';
        /**
         *
         * 文本从左到右排列
         *
         * @public
         */
        this.ltr = 'ltr';
    }
}
exports.TextDirection = TextDirection;
