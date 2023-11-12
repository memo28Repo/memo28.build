/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:23:25
 * @LastEditTime: 2023-11-11 10:59:47
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/store/user/user.ts
 */
import { token, userId } from '@memo28.build/constants'
import { UserResponse, userModel } from '@memo28.build/types'
import { CreateAction, CreateCase, CreateSlice } from '@memo28/enhance-redux/src'
import { isObjectEmpty } from '@memo28/utils'
import { UserProfileType } from './userType.ts'


export const userActions = new CreateAction()
    .addAction<{ data: Partial<UserResponse.LoginResponse> }, "setLoginProfile">("setLoginProfile")
    .addAction<{ data: Partial<userModel> }, "setUserInfo">('setUserInfo')

export const userCase = new CreateCase<typeof userActions, UserProfileType>()
    .addCase("setLoginProfile", function (state, action) {
        if (isObjectEmpty(action.payload.data)) return
        state.loginProfile = action.payload.data
        localStorage.setItem(token, action.payload.data.assetsToken || '')
        localStorage.setItem(userId, action.payload.data.userId?.toString() || '')
    })
    .addCase("setUserInfo", function (state, action) {
        if (isObjectEmpty(action.payload.data)) return
        state.userInfo = action.payload.data
        localStorage.setItem(userId, action.payload.data.ID?.toString() || '')
    })


export const userSlice = new CreateSlice<UserProfileType, "userSlice">("userSlice", {
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
}, userActions, userCase)
