import React from 'react'
import { Button } from 'antd'

import './index.less'

function HeadPag() {
  return (
    <div className='middle-flex'>
        <Button type='primary'>添加日程</Button>
      </div>
  )
}

const Index: React.FC = () => {
  return <>
    <HeadPag />
  </>
}

export default Index
