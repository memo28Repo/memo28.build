/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 09:28:21
 * @LastEditTime: 2023-09-27 19:59:08
 * @Description:
 * @FilePath: /buildingBlocks/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from '@tanstack/react-router'
import {store} from '~/store/index.ts'
import {Provider} from 'react-redux'

import {router} from '~/router/index.ts'
import './index.css'
import '~/service/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
