/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-01 11:27:19
 * @LastEditTime: 2023-10-04 23:04:10
 * @Description: 
 * @FilePath: /buildingBlocks/src/components/breadcrumbs/index.tsx
 */
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from "react";

export interface breadcrumbsComponentProps {
    list: { name: string, onClick?: () => void, disable?: boolean }[]
}

export const BreadcrumbsComponent: FC<breadcrumbsComponentProps> = ({ list }) => {


    return (
        <div className={'h-11 flex items-center pl-10 bg-white  '}>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                {
                    list.map((route, routeIndex) => {
                        return <>
                            {route.disable ? <>
                                <Typography>{route.name}</Typography>
                            </> : <>
                                <Link key={routeIndex} underline="hover" className='cursor-pointer' color="inherit">
                                    {route.name}
                                </Link>
                            </>}
                        </>

                    })
                }
            </Breadcrumbs>
        </div>
    )
}

