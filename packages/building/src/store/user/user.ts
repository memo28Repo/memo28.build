/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:23:25
 * @LastEditTime: 2023-10-22 10:29:00
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/user/user.ts
 */
import { token, userId } from '@memo28.build/constants'
import { UserResponse, userModel } from '@memo28.build/types'
import { createSlice } from '@reduxjs/toolkit'
import { UserProfileType } from './userType.ts'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loginProfile: {
            assetsToken: '',
            userId: undefined
        },
        userInfo: {
            email: '',
            password: '',
            username: '',
            userType: ''
        }
    } as UserProfileType,
    reducers: {
        setLoginProfile(state, payload: { payload: Partial<UserResponse.LoginResponse>, type: string }) {
            state.loginProfile = payload.payload
            localStorage.setItem(token, payload.payload.assetsToken || '')
            localStorage.setItem(userId, payload.payload.userId?.toString() || '')
        },
        setUserInfo(state, payload: { payload: Partial<userModel>, type: string }) {
            state.userInfo = payload.payload
            localStorage.setItem(userId, payload.payload.ID?.toString() || '')
        }
    }
})
