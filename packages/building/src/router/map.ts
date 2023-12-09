/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-30 18:27:46
 * @LastEditTime: 2023-11-19 15:56:46
 * @Description: 
 * @FilePath: /buildingRepo/packages/building/src/router/map.ts
 */
export const routerMap = {
    create: {
        index: '/create'
    },
    edit: {
        index: '/edit'
    },
    home: {
        index: '/'
    },
    login: {
        index: '/login'
    },
    canvas: {
        index: '/canvas',
        children: {
            page: '/page',
            terminal: {
                h5Preview: '/h5Preview'
            }
        }
    }
}
