/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 12:45:53
 * @LastEditTime: 2023-10-22 16:04:09
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/hooks/usePage.ts
 */
import { promiseFn } from '@memo28/types'
import { useState } from 'react'
export function usePageBgColor() {
    function setBgColor(color: string) {
        document.body.style.background = color
    }

    setBgColor('rgba(249, 250, 251,1)')
    // setBgColor('rgba(0,0,0,0.1)')

    return { setBgColor }

}

export interface pagingOpts {
    request: promiseFn
}

export function usePaging(opts: pagingOpts) {

    const [pageParams, setPageParams] = useState({
        pageNo: 1,
        pageSize: 10
    })


    async function getNextPage() {
        const result = await opts.request({ ...pageParams })
        console.log(result)
    }

    return {
        getNextPage
    }
}