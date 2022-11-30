import request from '@/common/request'

/**
 * 二维码 key 生成接口
 */
export const getQRKey = () =>
  request({
    url: '/login/qr/key',
  })
/**
 * 二维码图片生成接口
 */
export const getQR = () =>
  request({
    url: '/login/qr/create',
  })
/**
 *  二维码检测扫码状态接口
 */
export const checkQRLoginState = () =>
  request({
    url: '/login/qr/check',
  })
