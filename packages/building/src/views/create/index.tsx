/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 19:20:21
 * @LastEditTime: 2023-11-01 20:33:37
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/views/create/index.tsx
 */
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import { FC, useEffect, useMemo, useRef } from 'react';
import { BreadcrumbsComponent, breadcrumbsComponentProps } from '~/components/breadcrumbs/index.tsx';
import { PaginationComponent } from '~/components/pagination/index.tsx';
import { useAppSlice } from '~/hooks/useAppSlice.ts';
import { usePageBgColor, usePaging } from '~/hooks/usePage.ts';
import { useUserSlice } from '~/hooks/useUserSlice.ts';
import { AppService } from '~/service/api/app/app';
import { addAppRef } from '~/views/create/components/addApp/addAppRef.ts';
import { AddApp } from '~/views/create/components/addApp/index.tsx';

import { AppCard } from './components/appCard/index.tsx';
/**
 *
 * 创建应用List界面
 *
 */
const Create: FC<unknown> = () => {
    usePageBgColor()
    const {user} = useUserSlice()
    const addAppRef = useRef<addAppRef>()
    const appService = new AppService()

    const breadcrumbsComponentList = useMemo<breadcrumbsComponentProps['list']>(()=>{
        return [{ name: user.userInfo.email || '', disable: true }, { name: '应用列表', disable: true }]
    },[user])

    const { initializeDefaultConfigurationLoading, getDefaultConfig } = useAppSlice()

    const { getNextPage } = usePaging({
        request: appService.page
    })

    useEffect(() => {
        getNextPage()
        getDefaultConfig()
    }, [])



    return <>
        <BreadcrumbsComponent list={breadcrumbsComponentList} />
        <div className='flex-col items-center flex'>
            <div className='mb-6 flex justify-start w-full px-4 mt-2'>
                <Button onClick={() => {
                    addAppRef.current?.openSwitch()
                }} variant="contained" color="primary">
                    新增
                </Button>
            </div>
            <div className='transition px-4 mb-11 w-full ' style={{ minHeight: '70vh' }}>
                <AppCard className={'mr-1.5 inline-block'} />
                <AppCard className={'mr-1.5 inline-block'} />
            </div>
            <PaginationComponent />
            <AddApp ref={addAppRef} />
        </div>
        <Snackbar open={initializeDefaultConfigurationLoading}>
            <Alert severity="info" sx={{ width: '100%' }}>
                初始化数据中...
            </Alert>
        </Snackbar>
    </>

}


export default Create
