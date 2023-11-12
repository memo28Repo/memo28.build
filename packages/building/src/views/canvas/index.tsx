/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-24 17:18:16
 * @LastEditTime: 2023-11-01 20:59:43
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/views/canvas/index.tsx
 */
import { useState } from 'react'
import Header from '~/components/layout/header/index'
import Menu from '~/components/layout/menu/index'

const Canvas = () => {
    const [openMenu, setMenu] = useState(false)
    return <>
        <Header open={openMenu} onClickMenu={() => {
            setMenu(true)
        }}/>
        <Menu onClose={() => {
            setMenu(false)
        }} open={openMenu}></Menu>
    </>
}

export default Canvas
