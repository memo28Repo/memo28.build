/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 17:20:46
 * @LastEditTime: 2023-10-11 16:36:10
 * @Description: 
 * @FilePath: /buildingBlocks/src/service/api/user/user.ts
 */
import { ConfigurationThrownToUser, Post, controller } from '@memo28/servicehelper';
import { Response } from "~/service";

@controller("/user",{
    apply: ['checkUser']
})
export class UserService {

    @Post("/check")
    async checkUser(configurationThrownToUser?: ConfigurationThrownToUser<Response<CheckUserResponse>>): Promise<CheckUserResponse> {
        return configurationThrownToUser?.response.data as CheckUserResponse
    }
}
