import request from '@/common/request'

/**
 * 搜索歌曲
 */
export const searchSong = params =>
  request({
    url: '/cloudsearch',
    params: {
      ...params,
      timestamp: Date.now(),
    },
  })
/**
 * 热搜列表(详细)
 */
export const searchHotList = () =>
  request({
    url: '/search/hot/detail',
  })
