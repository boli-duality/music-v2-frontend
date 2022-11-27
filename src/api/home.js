import request from '@/common/request'

// 获取轮播图
export const getBanner = () => {
  return request({
    url: '/banner',
    method: 'get',
  })
}
