/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 19:20:21
 * @LastEditTime: 2023-10-05 13:35:21
 * @Description: 
 * @FilePath: /buildingBlocks/src/views/create/index.tsx
 */
import { Button } from "@mui/material";
import { FC, useEffect, useRef } from 'react';
import { BreadcrumbsComponent, breadcrumbsComponentProps } from '~/components/breadcrumbs/index.tsx';
import { PaginationComponent } from '~/components/pagination/index.tsx';
import { usePageBgColor } from '~/hooks/usePage.ts';
import { App } from '~/service/api/app/app';
import { addAppRef } from '~/views/create/components/addApp/addAppRef.ts';
import { AddApp } from '~/views/create/components/addApp/index.tsx';
import { AppCard } from './components/appCard/index.tsx';

/**
 *
 * 创建应用List界面
 *
 */
export const Create: FC<unknown> = () => {
    usePageBgColor()
    const addAppRef = useRef<addAppRef>()
    const breadcrumbsComponentList: breadcrumbsComponentProps['list'] = [{ name: 'memo28', disable: true }, { name: '应用列表', disable: true }]

    useEffect(() => {
        new App().page({
            pageNo: 1,
            pageSize: 10
        })
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
    </>

}
