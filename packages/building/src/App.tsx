/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 09:28:21
 * @LastEditTime: 2023-10-22 10:24:58
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/App.tsx
 */
import { Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useStoreSynchronousLocalstorage } from '~/hooks/useStoreSynchronousLocalstorage'

function App() {
    const { syncUser } = useStoreSynchronousLocalstorage()
    useEffect(() => {
        syncUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}

export default App
