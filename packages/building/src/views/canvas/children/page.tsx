/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-11-12 15:22:27
 * @LastEditTime: 2023-11-19 15:58:00
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/views/canvas/children/page.tsx
 */
import { Outlet } from '@tanstack/react-router'
import { useAttrbute } from '~/hooks/useAttrbute'
import Attribute from '~/views/canvas/components/attribute/index'
import Library from '~/views/canvas/components/library/index'

const Page = () => {
    const { open } = useAttrbute()

    return <>
        <div className='w-full h-full bg-gray-50' onClick={open}>
            <Library />
        </div>
        <Outlet />
        <Attribute />
    </>
}

export default Page
