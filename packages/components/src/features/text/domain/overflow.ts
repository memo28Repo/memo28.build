/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:07:27
 * @LastEditTime: 2023-12-09 10:11:39
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/overflow.ts
 */


/**
 *
 * 如何处理溢出的文本
 *
 * @public
 */
export class TextOverflow implements ITextOverflow {

    /**
     *
     * 剪裁溢出的文本以修复其容器。
     *
     */
    clip: 'clip' = 'clip'


    /**
     *
     * 将溢出的文本淡出为透明。
     *
     * @public
     */
    fade: 'fade' = 'fade'

    /**
     *
     * 文本溢出隐藏
     *
     * @public
     *
     */
    ellipsis: 'ellipsis' = 'ellipsis'

    /**
     *
     * 在其容器外呈现溢出文本。
     *
     * @public
     */
    visible: 'visible' = 'visible'
}


export interface ITextOverflow {
    /**
     *
     * 剪裁溢出的文本以修复其容器。
     *
     */
    clip: 'clip'


    /**
     *
     * 将溢出的文本淡出为透明。
     *
     * @public
     */
    fade: 'fade'

    /**
     *
     * 文本溢出隐藏
     *
     * @public
     *
     */
    ellipsis: 'ellipsis'

    /**
     *
     * 在其容器外呈现溢出文本。
     *
     * @public
     */
    visible: 'visible'
}
