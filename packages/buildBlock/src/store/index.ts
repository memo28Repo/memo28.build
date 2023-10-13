import {configureStore, MiddlewareArray} from '@reduxjs/toolkit'
import {userSlice} from '~/store/user/user.ts'
import {addApp} from '~/store/form/addApp.ts'
import thunkMiddleware from 'redux-thunk'
// @ts-ignore
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        addApp: addApp.reducer
    },
    middleware: new MiddlewareArray().concat(thunkMiddleware, logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
