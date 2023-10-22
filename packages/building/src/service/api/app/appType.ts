/* eslint-disable @typescript-eslint/no-namespace */
/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-03 13:46:53
 * @LastEditTime: 2023-10-22 10:36:56
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/api/app/appType.ts
 */

export namespace AppServiceType {
    export namespace create {
        export interface req {
            name: string
            desc: string
            type: number
        }
    }

}
