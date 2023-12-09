import { ITextOverflow } from './overflow';
import { ITextAlign } from "./textAlign";
import { ITextDirection } from './textDirection';
import { TextStyle } from "./textStyle";
export declare class Text implements IText {
    /**
     * 文本
     */
    text: string;
    style?: TextStyle | string;
    textAlign?: ITextAlign;
    textDirection?: ITextDirection;
    overflow?: ITextOverflow;
    maxLines?: number;
    selectionColor?: string;
}
export interface IText {
    /**
     * 文本
     */
    text: string;
    style?: TextStyle | string;
    textAlign?: ITextAlign;
    textDirection?: ITextDirection;
    overflow?: ITextOverflow;
    maxLines?: number;
    selectionColor?: string;
}
//# sourceMappingURL=text.d.ts.map