/*
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:02:04
 * @LastEditTime: 2023-12-09 10:21:44
 * @Description:
 * @FilePath: /buildingRepo/packages/constants/src/features/text/domain/text.ts
 */

import {ITextOverflow} from './overflow'
import {ITextAlign} from "./textAlign"
import {ITextDirection} from './textDirection'
import {TextStyle} from "./textStyle"

export class Text implements IText {
    /**
     * 文本
     */
    text!: string

    style?: TextStyle | string

    textAlign?: ITextAlign

    textDirection?: ITextDirection

    overflow?: ITextOverflow

    maxLines?: number

    selectionColor?: string
}


export interface IText {
    /**
     * 文本
     */
    text: string

    style?: TextStyle | string

    textAlign?: ITextAlign

    textDirection?: ITextDirection

    overflow?: ITextOverflow

    maxLines?: number

    selectionColor?: string
}
