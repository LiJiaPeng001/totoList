import {
  createBrowserRouter,
} from 'react-router-dom'
import Index from '../pages/index/index'
import Test from '../pages/test/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/test',
    element: <Test />,
  },
])

export default router
