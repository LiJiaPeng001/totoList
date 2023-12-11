import React from 'react'
import ReactDOM from 'react-dom/client'
import dayjs from 'dayjs'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './router/index'
import store from './store/app'

import 'dayjs/locale/zh-cn'
import '@peeeng/css/common/index.css'
import './style/index.less'

dayjs.locale('zh-cn')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <RouterProvider router={routes} />
       </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)
