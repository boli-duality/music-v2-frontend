import request from '@/common/request'

// 搜索歌曲
export const searchSong = params => {
  return request({
    url: '/cloudsearch',
    method: 'get',
    params: {
      ...params,
      timestamp: Date.now(),
    },
  })
}
