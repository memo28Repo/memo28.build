/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 09:28:21
 * @LastEditTime: 2023-10-21 21:59:20
 * @Description:
 * @FilePath: /buildingBlocks/buildingRepo/packages/building/src/main.tsx
 */
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '~/store/index.ts'
import { coldTheme } from '~/theme/cold'
import './ani.scss'

import { router } from '~/router/index.ts'
import '~/service/index.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={coldTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
