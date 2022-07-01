import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
require('dayjs/locale/zh-cn')

export const timeAgo = (targetTime) => {
  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')
  const nowTime = dayjs()
  const time = dayjs(targetTime)
  return nowTime.to(time)
}
