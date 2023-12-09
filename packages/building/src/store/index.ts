/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 18:33:21
 * @LastEditTime: 2023-11-19 10:28:58
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/store/index.ts
 */
import { DefaultMiddleware, EnhanceRedux } from '@memo28/enhance-redux'
import { attributeSlice } from '~/store/attribute/attribute'
import { addApp } from '~/store/form/addApp.ts'
import { userSlice } from '~/store/user/user.ts'

const store = new EnhanceRedux().injectionAllocation({
    defaultMiddleware: new DefaultMiddleware({ reduxLogger: false })
})
    .addSlice(userSlice)
    .addSlice(attributeSlice)
    .getStore({
        reducer: {
            addApp: addApp.reducer
        },
        // middleware: new MiddlewareArray().concat(thunkMiddleware, logger)
    })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export { store }

