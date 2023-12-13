import type { ConfigType } from 'dayjs'

/**
 * @description: 任务状态 1:未完成 2:已完成 3:已删除
 */

type StatusMaps = 1 | 2 | 3

export interface PayloadOption {
  name: String
  date: ConfigType
  remark?: String
  status: StatusMaps
}