/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 14:39:51
 * @LastEditTime: 2023-10-22 15:56:17
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/views/index/index.tsx
 */
import {SNI} from '@memo28/utils'
import LinearProgress from '@mui/material/LinearProgress'
import {useNavigate} from '@tanstack/react-router'
import {useInterval} from 'ahooks'
import {FC, PropsWithChildren, useState} from 'react'
import {useAppSlice} from '~/hooks/useAppSlice'
import {useUserSlice} from '~/hooks/useUserSlice'
import {routerMap} from "~/router/map.ts"

const Index: FC<PropsWithChildren<unknown>> = () => {
    const [progress, setProgress] = useState(0)

    const app = useAppSlice()
    const user = useUserSlice()
    const navigate = useNavigate();

    const clearInterval = useInterval(async () => {
        if (SNI(90, progress)) {
            clearInterval()
            app.getDefaultConfig().then(async () => {
                if (user.isLogin) await navigate({
                    to: routerMap.create.index
                })
                else await navigate({
                    to: routerMap.login.index
                })
            })
        }
        setProgress(progress + 10)
    }, 200)

    return <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className='text-3xl mb-11 font-black transform duration-300 animate-trackingInContract'>
            @memo.com/building
        </div>
        <LinearProgress className='w-2/5' variant="determinate" value={progress}/>
    </div>
}
export default Index
