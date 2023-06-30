import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'
import routes from './router/index'
import 'uno.css'
import '@peeeng/css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
    <RouterProvider router={routes} />
      </ConfigProvider>
  </React.StrictMode>,
)
