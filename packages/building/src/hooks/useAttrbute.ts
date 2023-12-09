/*
 * @Author: @memo28.repo
 * @Date: 2023-11-19 10:29:40
 * @LastEditTime: 2023-11-19 10:33:25
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/useAttrbute.ts
 */

import { useSelectStore } from '@memo28/enhance-redux-hooks'
import { attributeSlice } from '~/store/attribute/attribute'

export function useAttrbute() {
    const { store: attrbuteStore, storeWithRoot: attrbuteStoreWithRoot, dispatch } = useSelectStore(attributeSlice)


    function open() {
        dispatch(attributeSlice.getActions().getAction('open')({ open: true }))
    }

    function close() {
        dispatch(attributeSlice.getActions().getAction('close')({ open: false }))
    }

    return { attrbuteStoreWithRoot, attrbuteStore, open, close }

}
