/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-03 13:46:42
 * @LastEditTime: 2023-10-22 16:06:24
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/api/app/app.ts
 */
import { AppResponse } from '@memo28.build/types';
import { ConfigurationThrownToUser, Get, Post, controller } from '@memo28/servicehelper';
import { Response, pageReq } from "~/service";
import { AppServiceType } from './appType';


@controller('/app', {
    apply: ['create', 'page', 'defaultConfig']
})
export class AppService {
    @Post('/create')
    async create(_opt: AppServiceType.create.req, res?: ConfigurationThrownToUser<Response<number>>) {
        return res?.response.data
    }

    @Get('/default')
    async defaultConfig(res?: ConfigurationThrownToUser<Response<AppResponse.defaultConfig>>): Promise<AppResponse.defaultConfig> {
        return res?.response.data as AppResponse.defaultConfig
    }

    @Get('/page')
    async page(_opt: pageReq, res?: ConfigurationThrownToUser<Response>) {
        return res?.response.data
    }
}
