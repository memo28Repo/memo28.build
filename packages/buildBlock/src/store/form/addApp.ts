/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:54:17
 * @LastEditTime: 2023-10-02 15:51:55
 * @Description: 
 * @FilePath: /buildingBlocks/src/store/form/addApp.ts
 */
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
        type: '',
        // 应用标识
        name: '',
        // 应用描述
        desc: '',
    } as addAppTypes,
    reducers: {
        setType(state: addAppTypes, payload: { payload: { type: string } }) {
            state.type = payload.payload.type
        },
        setDesc(state: addAppTypes, payload: { payload: { desc: string } }) {
            state.desc = payload.payload.desc
        },
        setName(state: addAppTypes, payload: { payload: { name: string } }) {
            state.name = payload.payload.name
        },
        //  是否有遗留未完善消息
        isImperfectNews(state: addAppTypes, payload: { payload: { test?: string }, type: string }) {
            return !(Object.values(state).every(item => !!(item)))
        }
    }
})
