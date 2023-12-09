"use strict";
/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:07:27
 * @LastEditTime: 2023-12-09 10:11:39
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/overflow.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextOverflow = void 0;
/**
 *
 * 如何处理溢出的文本
 *
 * @public
 */
class TextOverflow {
    constructor() {
        /**
         *
         * 剪裁溢出的文本以修复其容器。
         *
         */
        this.clip = 'clip';
        /**
         *
         * 将溢出的文本淡出为透明。
         *
         * @public
         */
        this.fade = 'fade';
        /**
         *
         * 文本溢出隐藏
         *
         * @public
         *
         */
        this.ellipsis = 'ellipsis';
        /**
         *
         * 在其容器外呈现溢出文本。
         *
         * @public
         */
        this.visible = 'visible';
    }
}
exports.TextOverflow = TextOverflow;
