/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:14:48
 * @LastEditTime: 2023-10-22 15:34:07
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/index.ts
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
import { ErrorCode } from './plugins/errorCode'
import { Header } from './plugins/header'


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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    interceptorModule: [MultiVersionSwitching, RetData, Header, ErrorCode],
})
@initializeConfiguration({
    baseURL: 'http://localhost:8081/version/',
    versionPlaceholder: 'version',
    version: 'v1',
    debugger: false
})

export class Service extends ServiceCore {

}