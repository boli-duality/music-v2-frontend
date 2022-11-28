import request from '@/common/request'

/**
 * 获取推荐视频
 */
export const recommendVideo = () => {
  return request({
    url: '/video/timeline/recommend',
  })
}
