/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 10:12:08
 * @LastEditTime: 2023-11-11 12:56:29
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/hooks/useUserSlice.ts
 */
import { UserResponse } from '@memo28.build/types'
import { useSelectStore } from '@memo28/enhance-redux-hooks'
import { useMemo } from 'react'
import { UserService } from '~/service/api/user/user'
import { userActions, userSlice } from '~/store/user/user'

export function useUserSlice() {
    const { store: user, empty, dispatch } = useSelectStore(userSlice)
    const userService = new UserService()

    function setLoginProfile(opt: Partial<UserResponse.LoginResponse>) {
        dispatch(userActions.getAction("setLoginProfile")?.({ data: opt }))
    }

    async function getUserInfo(id: number) {
        dispatch(
            userActions.getAction("setUserInfo")?.({
                data:
                    await userService.ById({ ID: id })
            }))
    }

    const isLogin = useMemo(() => {
        return !empty('loginProfile.assetsToken') && !empty('loginProfile.userId')
    }, [empty])


    return { getUserInfo, setLoginProfile, isLogin, user }
}
