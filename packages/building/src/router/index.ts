/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 14:36:17
 * @LastEditTime: 2023-10-22 15:46:42
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/router/index.ts
 */
import {
    RootRoute,
    Route,
    Router,
} from '@tanstack/react-router'
import { routerMap } from "~/router/map.ts"
import { Create } from '~/views/create/index.tsx'
import { Edit } from '~/views/edit/index.tsx'
import { Index } from '~/views/index/index.tsx'
import { Login } from '~/views/login/index.tsx'
import App from '../App.tsx'

interface routerMeta {
    title: string
}

const LoginRoute = new Route({
    getParentRoute() {
        return rootRoute
    },
    path: routerMap.login.index,
    component: Login,
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
    component: Index,
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
    component: Create,
    meta: {
        title: 'create'
    } as routerMeta,
})

const rootRoute = new RootRoute({
    component: App
});

const routerTree = rootRoute.addChildren([
    IndexRoute,
    EditRoute,
    CreateRoute,
    LoginRoute
])

export const router = new Router({ routeTree: routerTree })






