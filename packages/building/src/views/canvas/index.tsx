/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-24 17:18:16
 * @LastEditTime: 2023-11-19 15:39:36
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/views/canvas/index.tsx
 */
import { Outlet } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import Header from '~/components/layout/header/index'
import Menu from '~/components/layout/menu/index'
import './index.scss'

const Canvas = () => {
    const [openMenu, setMenu] = useState(false)

    // 占位布局
    const spaceOccupyingLayout = useMemo(() => {
        if (openMenu) return 'transition-all w-60'
        return 'w-20 transition-all'
    }, [openMenu])
    return <div className='canvas'>
        <Header open={openMenu} onClickMenu={() => {
            setMenu(true)
        }} />
        <Menu onClose={() => {
            setMenu(false)
        }} open={openMenu}></Menu>
        <div className='flex spaceOccupyingLayout'>
            <div className={spaceOccupyingLayout}></div>
            <Outlet />
        </div>
    </div>
}

export default Canvas
