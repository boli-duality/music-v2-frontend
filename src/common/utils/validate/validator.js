import * as reg from './regexp'
// 身份证(默认使用第二代身份证18位)
export const isIDCard = v => reg.IDCard.test(v)
// 身份证(15位)
export const isIDCard15 = v => reg.IDCard15.test(v)
// 身份证(总)
export const isIDCardAll = v => reg.IDCardAll.test(v)
// 税号
export const isTIN = v => reg.TIN.test(v)
