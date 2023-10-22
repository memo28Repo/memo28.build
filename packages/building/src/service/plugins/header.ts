/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 09:03:25
 * @LastEditTime: 2023-10-22 10:08:50
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/plugins/header.ts
 */

import { token } from '@memo28.build/constants'
import { initializeConfigurationTypes, interceptorImpl } from '@memo28/service'

export class Header implements interceptorImpl<initializeConfigurationTypes> {
    async requestSuc(config: initializeConfigurationTypes) {
        config.headers = {
            authorization: localStorage.getItem(token)
        }
        return config
    }
}