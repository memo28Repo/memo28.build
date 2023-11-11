/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-11-11 09:21:13
 * @LastEditTime: 2023-11-11 11:53:13
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/useStoreHelper.ts
 */
import { useSelectStore } from '@memo28/enhance-redux-hooks';
import { userActions, userSlice } from '~/store/user/user';

export function useUser() {
    const user = useSelectStore<typeof userSlice>(userSlice)
    console.log(user.dispatch(
        userActions.getAction("setUserInfo")({ data: {} })
    ))
}


