import request from '@/common/request'

/**
 * 首页-发现
 */
export const getHome = () =>
  request({
    url: '/homepage/block/page',
  })
/**
 * 获取轮播图
 */
export const getBanner = () =>
  request({
    url: '/banner',
  })
