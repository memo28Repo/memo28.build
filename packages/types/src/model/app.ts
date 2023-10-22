/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-21 22:02:20
 * @LastEditTime: 2023-10-22 08:57:04
 * @Description: 
 * @FilePath: /buildingRepo/packages/types/src/model/app.ts
 */

/**
 * 
 * app 实体
 * 
 * @public
 * 
 */
export interface appModel {
    /**
     * 应用标识
     * 
     * @public
     */
    name: string
    /**
     * 应用描述
     * 
     * @public
     */
    desc?: string
    /**
     * 
     * 应用类型 1. web 2. uniApp 3. h5 4. web component 5. uniApp component
     * 
     * @public
     */
    type: number

    /**
     * 画布Id
     * 
     * @public
     */
    canvasId: number
}