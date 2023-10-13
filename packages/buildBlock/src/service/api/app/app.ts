/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-03 13:46:42
 * @LastEditTime: 2023-10-05 13:36:43
 * @Description: 
 * @FilePath: /buildingBlocks/src/service/api/app/app.ts
 */
import { ConfigurationThrownToUser, Get, Post, controller } from '@memo28/servicehelper';
import { Response, pageReq } from "~/service";
import { AppService } from './appType';


@controller('/app', {
    apply: ['create', 'page']
})
export class App {
    @Post('/create')
    async create(_opt: AppService.create.req, res?: ConfigurationThrownToUser<Response<number>>) {
        return res?.response.data
    }

    @Get('/page')
    async page(_opt: pageReq, res?: ConfigurationThrownToUser<Response>) {
        console.log(res, 'res')
    }
}
