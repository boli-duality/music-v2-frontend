import request from '@/common/request'

// 搜索歌曲
export const searchSong = data => {
  return request({
    url: '/cloudsearch',
    method: 'post',
    data,
  })
}
