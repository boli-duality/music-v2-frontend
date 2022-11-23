import * as test from './validator'

// 身份证
export const IDCard = [
  {
    required: true,
    message: '身份证',
    trigger: ['change', 'blur'],
  },
  {
    validator: (rule, value) => test.isIDCard(value),
    message: '请输入正确的身份证',
    trigger: ['change', 'blur'],
  },
]
// 税号
export const TIN = [
  {
    required: true,
    message: '请输入企业税号',
    trigger: ['change', 'blur'],
  },
  {
    validator: (rule, value) => test.isTIN(value),
    message: '请输入正确的企业税号',
    trigger: ['change', 'blur'],
  },
]
