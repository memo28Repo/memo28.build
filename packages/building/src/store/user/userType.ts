/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 18:38:16
 * @LastEditTime: 2023-10-22 09:40:57
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/user/userType.ts
 */
import { userModel, UserResponse } from '@memo28.build/types'

export interface UserProfileType {
    loginProfile: Partial<UserResponse.LoginResponse>
    userInfo: Partial<userModel>
}


