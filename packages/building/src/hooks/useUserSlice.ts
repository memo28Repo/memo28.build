/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 10:12:08
 * @LastEditTime: 2023-10-22 15:51:27
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/useUserSlice.ts
 */
import { UserResponse } from '@memo28.build/types'
import { useMemo } from 'react'
import { UserService } from '~/service/api/user/user'
import { userSlice } from '~/store/user/user'
import { useAppDispatch, useAppSelector } from './store'

export function useUserSlice() {
    const userService = new UserService()
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => {
        return state.userSlice
    })

    function setLoginProfile(opt: Partial<UserResponse.LoginResponse>) {
        dispatch(
            userSlice.actions.setLoginProfile(opt)
        )
    }

    async function getUserInfo(id: number) {
        dispatch(userSlice.actions.setUserInfo(
            await userService.ById({ ID: id })
        ))
    }

    const isLogin = useMemo(() => {
        return user.loginProfile.assetsToken && user.loginProfile.userId
    }, [user])


    return { getUserInfo, setLoginProfile, isLogin }
}
