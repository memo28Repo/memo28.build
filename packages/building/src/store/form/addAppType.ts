/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:57:44
 * @LastEditTime: 2023-10-22 10:46:40
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/form/addAppType.ts
 */
import { AppResponse } from '@memo28.build/types'
export interface addAppTypes {
    type: number
    name: string
    desc: string,
    fieldConfig: Partial<AppResponse.defaultConfig>
}
