import {
    RootRoute,
    Route,
    Router,
} from '@tanstack/react-router'
import {Edit} from '~/views/edit/index.tsx'
import {Create} from '~/views/create/index.tsx'
import App from '../App.tsx'
import {Index} from '~/views/index/index.tsx'
import {routerMap} from "~/router/map.ts";


interface routerMeta {
    title: string
}

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
    CreateRoute
])

export const router = new Router({routeTree: routerTree})






