/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:14:48
 * @LastEditTime: 2023-10-05 13:34:16
 * @Description: 
 * @FilePath: /buildingBlocks/src/service/index.ts
 */
import {
    MultiVersionSwitching,
    RetData,
    ServiceCore,
    initializeConfiguration,
    instantiation,
    modules
} from '@memo28/service'
import { extractRequestInstance } from '@memo28/servicehelper'


export interface Response<T = unknown> {
    code: number
    data: T
    msg: string
}

export interface pageReq {
    pageNo: number
    pageSize: number
}

@extractRequestInstance()
@instantiation()
@modules({
    interceptorModule: [MultiVersionSwitching, RetData],
})
@initializeConfiguration({
    baseURL: 'http://localhost:8081/version/',
    versionPlaceholder: 'version',
    version: 'v1',
})

export class Service extends ServiceCore {

}
