/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 18:33:21
 * @LastEditTime: 2023-11-09 13:59:58
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/store/index.ts
 */
import { DefaultMiddleware, EnhanceRedux } from '@memo28/enhance-redux'
import { addApp } from '~/store/form/addApp.ts'
import { userSlice } from '~/store/user/user.ts'

const store = new EnhanceRedux().injectionAllocation({
    defaultMiddleware: new DefaultMiddleware({ reduxLogger: false })
})
.addSlice(userSlice)
.getStore({
    reducer: {
        addApp: addApp.reducer
    },
    // middleware: new MiddlewareArray().concat(thunkMiddleware, logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export { store }

