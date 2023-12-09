/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:04:50
 * @LastEditTime: 2023-12-09 10:20:14
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/textAlign.ts
 */

/**
 *
 * 是否以及如何水平对齐文本
 *
 * @public
 */
export class TextAlign implements ITextAlign {
    /**
     *
     * 将文本与容器的左边缘对齐.
     *
     * @public
     *
     */
    left: 'left' = 'left'

    /**
     *
     * 将文本对齐在容器的右边缘.
     *
     * @public
     *
     */
    right: 'right' = 'right'

    /**
     *
     * 将文本与容器的中心对齐。
     *
     * @public
     */
    center: 'center' = 'center'

    /**
     *
     * 拉伸以软换行符结尾的文本行，以填充容器的宽度
     *
     * 以硬线换行符结尾的线与[开始]边对齐
     *
     * @public
     */
    justify: 'justify' = 'justify'

    /**
     *
     * 将文本与容器的前缘对齐
     *
     * @public
     */
    start: 'start' = 'start'

    /**
     *
     * 将文本与容器的尾部边缘对齐
     *
     * @public
     */
    end: 'end' = 'end'
}

export interface ITextAlign {
    /**
     *
     * 将文本与容器的左边缘对齐.
     *
     * @public
     *
     */
    left: 'left'

    /**
     *
     * 将文本对齐在容器的右边缘.
     *
     * @public
     *
     */
    right: 'right'

    /**
     *
     * 将文本与容器的中心对齐。
     *
     * @public
     */
    center: 'center'

    /**
     *
     * 拉伸以软换行符结尾的文本行，以填充容器的宽度
     *
     * 以硬线换行符结尾的线与[开始]边对齐
     *
     * @public
     */
    justify: 'justify'

    /**
     *
     * 将文本与容器的前缘对齐
     *
     * @public
     */
    start: 'start'

    /**
     *
     * 将文本与容器的尾部边缘对齐
     *
     * @public
     */
    end: 'end'
}
