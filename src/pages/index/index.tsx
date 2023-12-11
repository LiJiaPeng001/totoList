import React from 'react'
import { Button } from 'antd'
import ToList from './components/left-date'
import RightList from './components/right-content'
import AddModal from './components/add-modal'
import type { PayloadOption } from './types'
import { formatDate } from '~/utils/date'

import './index.less'

interface HeadProps {
  onClick: () => void
}

function HeadPage(props: HeadProps) {
  return (
    <div className='head-page middle-flex' onClick={props.onClick}>
        <Button type='primary'>添加日程</Button>
      </div>
  )
}

const Index: React.FC = () => {
  const currentDate = formatDate(new Date(), 'YYYY-MM-DD')
  const [visible, updateVisible] = useState(false)
  const [payload, updatePayload] = useState<PayloadOption>({
    name: '',
    date: currentDate,
    remark: '',
  })
  return (
    <div className='index-page flex'>
      <div className="left-date">
        <HeadPage onClick={() => updateVisible(true)}/>
        <ToList />
      </div>
      <RightList date={currentDate} />
      <AddModal visible={visible} payload={payload} onClose={() => updateVisible(false)} />
    </div>
  )
}

export default Index
