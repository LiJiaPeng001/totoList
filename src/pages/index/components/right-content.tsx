import React from 'react'
import { Card } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

interface Props {
  date: string
}

function addModal(props: Props) {
  console.log(props, 'props')
}

const RightList: React.FC<Props> = (props: Props) => {
  console.log(props.date, 'props')
  return <>
    <div className='right-content'>
      <Card title={props.date} extra={<PlusCircleFilled onClick={() => addModal(props)} style={{ fontSize: '22px' }} />}>
        <div className="title middle-flex">
          <span>进行中 Fighting</span>
          <img src="" alt="" className="icon" />
        </div>
        {/* 添加 */}
        {/* 未完成列表 */}
      </Card>
    </div>
  </>
}

export default RightList
