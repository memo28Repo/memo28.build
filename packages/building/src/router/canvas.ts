/*
 * @Author: @memo28.repo
 * @Date: 2023-11-19 10:06:58
 * @LastEditTime: 2023-11-19 15:58:19
 * @Description: canvas 路由相关配置
 * @FilePath: /buildingRepo/packages/building/src/router/canvas.ts
 */
import {
    Route,
    lazyRouteComponent
} from '@tanstack/react-router'
import { routerMap } from '~/router/map'
import { rootRoute, routerMeta } from './index'


export const CanvasRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.canvas.index,
    component: lazyRouteComponent(() => import('~/views/canvas/index')),
    meta: {
        title: 'canvas'
    } as routerMeta,
    loader() {
        document.title = '画布'
    }
})


const Page = new Route({
    getParentRoute() {
        return CanvasRoute
    },
    path: routerMap.canvas.children.page,
    component: lazyRouteComponent(() => import('~/views/canvas/children/page.tsx')),
    meta: {
        title: 'page'
    } as routerMeta,
    loader() {
        document.title = '页面'
    }
})

const H5Preview = new Route({
    getParentRoute() {
        return Page
    },
    path: routerMap.canvas.children.terminal.h5Preview,
    component: lazyRouteComponent(() => import('~/views/canvas/children/terminal/h5.tsx')),
    meta: {
        title: 'h5Preview'
    } as routerMeta,
    loader() {
        document.title = 'h5Preview'
    }
})

Page.addChildren([H5Preview])

CanvasRoute.addChildren([Page])


