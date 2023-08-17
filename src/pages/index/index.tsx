import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { increment } from '~/store/count'
import type { AppState } from '~/store/app'

function Index() {
  const count = useSelector((state: AppState) => state.count.value)
  const dispatch = useDispatch()
  const [name, setName] = useState('wuhu')
  function changeName() {
    setName('IUIUIU')
  }
  return <>
    <Button onClick={() => dispatch(increment())}>Add</Button>
    <div>{count}</div>
    <div>{name}</div>
    <Button onClick={() => changeName()}>ChangeName</Button>
  </>
}

export default Index
