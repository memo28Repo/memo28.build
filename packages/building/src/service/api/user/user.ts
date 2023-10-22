/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:20:46
 * @LastEditTime: 2023-10-22 09:39:59
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/service/api/user/user.ts
 */
import { userModel, UserResponse } from '@memo28.build/types';
import { ConfigurationThrownToUser, controller, Get, Post } from '@memo28/servicehelper';
import { Response } from "~/service";

@controller("/user", {
    apply: ['checkUser', 'Login', 'Register', 'ById']
})
export class UserService {

    @Post("/check")
    async checkUser(configurationThrownToUser?: ConfigurationThrownToUser<Response<CheckUserResponse>>): Promise<CheckUserResponse> {
        return configurationThrownToUser?.response.data as CheckUserResponse
    }

    @Get("/login")
    async Login(_opt?: Partial<userModel>, configurationThrownToUser?: ConfigurationThrownToUser<Response<UserResponse.LoginResponse>>): Promise<UserResponse.LoginResponse> {
        return configurationThrownToUser?.response.data as UserResponse.LoginResponse
    }

    @Get("/byId")
    async ById(_opt?: Partial<userModel>, configurationThrownToUser?: ConfigurationThrownToUser<Response<userModel>>): Promise<userModel> {
        return configurationThrownToUser?.response.data as userModel
    }

    @Get("/register")
    async Register(_opt?: Partial<userModel>, configurationThrownToUser?: ConfigurationThrownToUser<Response<CheckUserResponse>>): Promise<CheckUserResponse> {
        return configurationThrownToUser?.response.data as CheckUserResponse
    }
}
