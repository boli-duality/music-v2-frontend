import request from '@/common/request'

/**
 * 搜索歌曲
 */
export const searchSong = params => {
  return request({
    url: '/cloudsearch',
    params: {
      ...params,
      timestamp: Date.now(),
    },
  })
}
/**
 * 热搜列表(详细)
 */
export const searchHotList = () => {
  return request({
    url: '/search/hot/detail',
  })
}
