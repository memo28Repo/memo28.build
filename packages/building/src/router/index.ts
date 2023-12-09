/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 14:36:17
 * @LastEditTime: 2023-11-19 10:09:14
 * @Description:
 * @FilePath: /buildingRepo/packages/building/src/router/index.ts
 */
import {
    RootRoute,
    Route,
    Router,
    lazyRouteComponent
} from '@tanstack/react-router'
import { routerMap } from "~/router/map.ts"
import { Edit } from '~/views/edit/index.tsx'
import App from '../App.tsx'
import { CanvasRoute } from './canvas.ts'

export interface routerMeta {
    title: string
}


const LoginRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.login.index,
    component: lazyRouteComponent(() => import('~/views/login/index')),
    meta: {
        title: 'login'
    } as routerMeta,
    loader() {
        document.title = 'login'
    }
})

const IndexRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.home.index,
    component: lazyRouteComponent(() => import('~/views/index/index')),
    meta: {
        title: '@memo28/building'
    } as routerMeta,
    loader() {
        document.title = '@memo28/building'
    }
})

const EditRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.edit.index,
    component: Edit,
    meta: {
        title: 'edit'
    } as routerMeta,
    loader() {
        document.title = 'edit'
    }
})

const CreateRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.create.index,
    component: lazyRouteComponent(() => import('~/views/create/index')),
    meta: {
        title: 'create'
    } as routerMeta,
})

export const rootRoute = new RootRoute({
    component: App
});



const routerTree = rootRoute.addChildren([
    IndexRoute,
    EditRoute,
    CreateRoute,
    LoginRoute,
    CanvasRoute
])

export const router = new Router({ routeTree: routerTree })






