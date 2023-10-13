/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-03 13:46:53
 * @LastEditTime: 2023-10-03 13:54:49
 * @Description: 
 * @FilePath: /buildingBlocks/src/service/api/app/appType.ts
 */

export namespace AppService {
    export namespace create {
        export interface req {
            name: string
            desc: string
            type: number
        }
    }

}
