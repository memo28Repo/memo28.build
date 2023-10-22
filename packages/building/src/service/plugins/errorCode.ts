/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 15:25:02
 * @LastEditTime: 2023-10-22 15:50:04
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/plugins/errorCode.ts
 */
import { code } from '@memo28.build/constants';
import { initializeConfigurationTypes, interceptorImpl } from '@memo28/service';
import { SNI } from '@memo28/utils';
import { routerMap } from '~/router/map';
import { Response } from '../index';

export class ErrorCode implements interceptorImpl<initializeConfigurationTypes, Response> {
    responseSuc(res: Response) {
        if (SNI(res.code, code.PleaseLogInCode)) {
            location.href = routerMap.home.index
            return Promise.reject(res)
        }
        return Promise.resolve(res)
    }
}