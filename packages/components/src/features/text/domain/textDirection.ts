/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:05:34
 * @LastEditTime: 2023-12-09 10:15:04
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/textDirection.ts
 */


/**
 *
 * 文本流动的方向
 *
 * @public
 *
 */
export class TextDirection implements ITextDirection {

    /**
     * 文本从右向左排列
     *
     * @public
     *
     */
    rtl: 'rtl' = 'rtl'

    /**
     *
     * 文本从左到右排列
     *
     * @public
     */
    ltr: 'ltr' = 'ltr'
}


export interface ITextDirection {

    /**
     * 文本从右向左排列
     *
     * @public
     *
     */
    rtl: 'rtl'

    /**
     *
     * 文本从左到右排列
     *
     * @public
     */
    ltr: 'ltr'
}
