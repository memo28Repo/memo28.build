/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 18:33:21
 * @LastEditTime: 2023-10-22 09:55:53
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/index.ts
 */
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { addApp } from '~/store/form/addApp.ts'
import { userSlice } from '~/store/user/user.ts'
// @ts-ignore
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        addApp: addApp.reducer
    },
    middleware: new MiddlewareArray().concat(thunkMiddleware, logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
