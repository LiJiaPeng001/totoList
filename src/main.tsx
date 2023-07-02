import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './router/index'
import store from './store/app'

import 'uno.css'
import '@peeeng/css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <RouterProvider router={routes} />
       </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)
