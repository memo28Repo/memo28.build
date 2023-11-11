/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-21 22:02:28
 * @LastEditTime: 2023-11-01 19:53:33
 * @Description: 
 * @FilePath: /buildingRepo/packages/types/src/model/user.ts
 */

/**
 * 
 * 用户实体
 * 
 * @public
 * 
 */
export interface userModel {
    /**
     * email
     * 
     * @public
     */
    email: string
    /**
     * 用户名
     * 
     * @public
     */
    username: string
    /**
     * 密码 
     * 
     * @public
     */
    password: string
    /**
     * 用户类型
     * 
     * @public
     */
    userType: string

    /**
     * 用户id
     * 
     * @public
     */
    ID: number
}