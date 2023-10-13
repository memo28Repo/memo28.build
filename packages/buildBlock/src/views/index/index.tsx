import {FC, PropsWithChildren, useEffect, useState, useRef} from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import {useNavigate} from '@tanstack/react-router'
import {UserService} from '~/service/api/user/user.ts'
import {SNI} from '@memo28/utils'
import {useInterval} from 'ahooks'
import {routerMap} from "~/router/map.ts";
import {useAppDispatch} from '~/hooks/store.ts'
import {userSlice} from '~/store/user/user.ts'

export const Index: FC<PropsWithChildren<unknown>> = () => {
    const [progress, setProgress] = useState(0)
    const dispatch = useAppDispatch()

    const navigate = useNavigate();

    const clearInterval = useInterval(async () => {
        if (SNI(90, progress)) {
            clearInterval()
            const result = await new UserService().checkUser()

            dispatch(userSlice.actions.setLoginProfile({
                assetsToken: result.assetsToken
            }))

            setProgress(100)

            await navigate({
                to: routerMap.create.index
            })
        }
        setProgress(progress + 10)
    }, 400)


    return <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className='text-3xl mb-11 font-black transform duration-300 animate-trackingInContract'>
            @memo.com/building
        </div>
        <LinearProgress className='w-2/5' variant="determinate" value={progress}/>
    </div>
}
