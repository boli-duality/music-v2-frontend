import request from '@/common/request'

// 获取轮播图
export const getBanner = data => {
  return request({
    url: '/banner',
    method: 'post',
    data,
  })
}
