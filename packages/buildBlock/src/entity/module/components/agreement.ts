/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 19:51:41
 * @LastEditTime: 2023-09-27 20:24:36
 * @Description:
 * @FilePath: /buildingBlocks/src/entity/module/components/agreement.ts
 */
import { readingWritingSeparationDetor } from '@memo28/utils'
import { elementType } from '~/types/element/index'

/**
 *
 * 定义组件协议
 *
 * @public
 */
export class ComponentAgreement {
    /**
     *
     * 组件元素类型
     * @public
     */
    @readingWritingSeparationDetor
    type?: elementType
}
