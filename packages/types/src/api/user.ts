/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 08:55:01
 * @LastEditTime: 2023-10-22 10:18:33
 * @Description: 
 * @FilePath: /buildingRepo/packages/types/src/api/user.ts
 */
/**
 * 
 * 用户相关响应类型
 * 
 * @public
 */
export namespace UserResponse {

    /**
     * 登录响应
     * 
     * @public
     */
    export interface LoginResponse {
        assetsToken: string
        userId: number
    }
}
