import request from '@/common/request'

/**
 * 首页-发现
 */
export const getHome = () => {
  return request({
    url: '/homepage/block/page',
  })
}
/**
 * 获取轮播图
 */
export const getBanner = () => {
  return request({
    url: '/banner',
  })
}
