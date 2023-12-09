import { fn } from '@memo28/types';
import { ReactNode } from 'react';
/**
 * 定义功能组 作用于 画布的 最左侧功能
 *
 * @public
 */
export interface functionalGroups {
    /**
     *
     * 展示的文本
     *
     * @public
     */
    text: string;
    /**
     * 展示的 `icon`
     *
     * @public
     */
    icon: ReactNode;
    /**
     *
     * 功能的间短描述
     *
     * @public
     */
    shortDescription?: ReactNode;
    /**
     *
     * 功能的长篇描述
     *
     * @public
     */
    specificDescription?: ReactNode;
    /**
     *
     * 点击事件
     *
     * @public
     */
    onClick?: fn<[], void>;
}
//# sourceMappingURL=functionalGroups.d.ts.map