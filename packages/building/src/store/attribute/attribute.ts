/*
 * @Author: @memo28.repo
 * @Date: 2023-11-19 10:20:05
 * @LastEditTime: 2023-11-19 10:25:26
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/store/attribute/attribute.ts
 */

import { CreateAction, CreateCase, CreateSlice } from '@memo28/enhance-redux';


export interface attributeState {
    open: boolean
}


const attributeActions = new CreateAction()
    .addAction<{ open: boolean }, 'open'>("open")
    .addAction<{ open: boolean }, 'close'>("close")


const attributeCase = new CreateCase<typeof attributeActions, attributeState>()

attributeCase.addCase('open', (state, action) => {
    state.open = action.payload.open
})

attributeCase.addCase('close', (state, action) => {
    state.open = action.payload.open
})



const attributeSlice = new CreateSlice("attribute", { open: false }, attributeActions, attributeCase)



export { attributeSlice };
