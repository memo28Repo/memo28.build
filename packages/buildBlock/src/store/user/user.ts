import {createSlice} from '@reduxjs/toolkit'
import {UserProfileType} from './userType.ts'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loginProfile: {
            assetsToken: ''
        }
    } as UserProfileType,
    reducers: {
        setLoginProfile(state, payload: { payload: Partial<UserProfileType['loginProfile']>, type: string }) {
            state.loginProfile.assetsToken = payload.payload.assetsToken || ''
        }
    }
})
