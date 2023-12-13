import React from 'react'
import { Button } from 'antd'
import ToList from './components/left-date'
import RightContent from './components/right-content'
import AddModal from './components/add-modal'
import type { PayloadOption } from './types'
import { useTake } from '~/utils/authority'
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
  const [payload] = useState<PayloadOption>({
    name: '',
    date: currentDate,
    remark: '',
    status: 1,
  })
  const takeList = useTake.get() || []
  const [takeData] = useState((takeList.find(it => it.date === currentDate) || {}).list as PayloadOption[])
  function onsubmit(e: PayloadOption) {
    console.log(e, 'values')
  }
  return (
    <div className='index-page flex'>
      <div className="left-date">
        <HeadPage onClick={() => updateVisible(true)}/>
        <ToList />
      </div>
      <RightContent date={currentDate} takeData={takeData} />
      <AddModal visible={visible} payload={payload} onSubmit={(e: PayloadOption) => onsubmit(e)} onClose={() => updateVisible(false)} />
    </div>
  )
}

export default Index
