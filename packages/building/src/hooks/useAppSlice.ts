/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 10:44:53
 * @LastEditTime: 2023-10-22 16:54:11
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/useAppSlice.ts
 */
import { AppResponse } from '@memo28.build/types'
import { SNI } from '@memo28/utils'
import { useState } from 'react'
import { AppService } from '~/service/api/app/app'
import { addApp } from '~/store/form/addApp'
import { useAppDispatch, useAppSelector } from './store'

export function useAppSlice() {
    const appDispatch = useAppDispatch()
    const appState = useAppSelector((state) => {
        return state.addApp
    })

    /**
     * 当一些app的初始化数据没有返回时 则一直loading
     */
    const [initializeDefaultConfigurationLoading, setInitializeDefaultConfigurationLoading] = useState(true)

    const appService = new AppService()

    async function getDefaultConfig(): Promise<AppResponse.defaultConfig> {
        return new Promise((resolve, reject) => {
            if (!SNI(0, Object.keys(appState.fieldConfig).length)) {
                reject(appState.fieldConfig)
                setInitializeDefaultConfigurationLoading(false)
                return
            }
            appService.defaultConfig().then(res => {
                appDispatch(
                    addApp.actions.setFieldConfig({
                        ...res
                    })
                )
                resolve(res)
            }).catch(reject).finally(() => {
                setInitializeDefaultConfigurationLoading(false)
            })
        })
    }

    function setDesc(value: string) {
        if (appState.fieldConfig.field?.descMaxLength) if (appState.fieldConfig.field?.descMaxLength < value.length) return
        appDispatch(addApp.actions.setDesc({
            desc: value
        }))
    }


    function setName(value: string) {
        if (appState.fieldConfig.field?.nameMaxLength) if (appState.fieldConfig.field?.nameMaxLength < value.length) return
        appDispatch(addApp.actions.setName({
            name: value
        }))
    }

    function setType(type: number) {
        appDispatch(addApp.actions.setType({
            type: type
        }))
    }
    return { getDefaultConfig, appState, setDesc, setName, setType, initializeDefaultConfigurationLoading }

}
