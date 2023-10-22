/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-22 10:09:36
 * @LastEditTime: 2023-10-22 10:34:00
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/useStoreSynchronousLocalstorage.ts
 */

import { token, userId } from '@memo28.build/constants';
import { useAppDispatch } from './store';
import { useUserSlice } from './useUserSlice';


/**
 * 
 * 将redux里面的状态与localstroage同步
 * 
 * @public
 */
export function useStoreSynchronousLocalstorage() {
    useAppDispatch()
    const user = useUserSlice()

    function syncUser() {
        const tk = localStorage.getItem(token)
        const uId = localStorage.getItem(userId)

        if (uId) {
            if (tk) {
                user.setLoginProfile({
                    assetsToken: tk,
                    userId: parseInt(uId)
                })
            }
            user.getUserInfo(parseInt(uId))
        }
    }

    return { syncUser }
}