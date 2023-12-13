import { PayloadOption } from '~/pages/index/types'
import {useLocalStorageState} from 'ahooks'


const [auth, setAuth] = useLocalStorageState<PayloadOption[]>(
  'peeeng-take',
  {
    defaultValue:[]
  }
)

export {auth,setAuth}
