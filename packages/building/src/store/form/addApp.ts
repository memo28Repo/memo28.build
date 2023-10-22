/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:54:17
 * @LastEditTime: 2023-10-22 10:50:36
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/form/addApp.ts
 */
import { AppResponse } from '@memo28.build/types';
import { createSlice } from '@reduxjs/toolkit';
import { addAppTypes } from "~/store/form/addAppType.ts";

// app类型
export const appType = {
    web: 1,
    h5: 2,
    uni: 3
}


export const addApp = createSlice({
    name: 'addApp',
    initialState: {
        // 应用类型
        type: 0,
        // 应用标识
        name: '',
        // 应用描述
        desc: '',
        fieldConfig: {

        }
    } as addAppTypes,
    reducers: {
        setFieldConfig(state: addAppTypes, payload: { payload: AppResponse.defaultConfig }) {
            state.fieldConfig = payload.payload
        },
        setType(state: addAppTypes, payload: { payload: { type: number } }) {
            state.type = payload.payload.type
        },
        setDesc(state: addAppTypes, payload: { payload: { desc: string } }) {
            state.desc = payload.payload.desc
        },
        setName(state: addAppTypes, payload: { payload: { name: string } }) {
            state.name = payload.payload.name
        },
    }
})
