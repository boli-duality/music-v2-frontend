export * from 'you-functions'

/**
 * 带颜色标签的console.log
 * @param {string|{label:string;style:string}} opts label的配置
 * @param  {...any} args 要打印的内容
 */
export const logs = (opts, ...args) => {
  const defaultStyle = 'color:white;background:green;padding:2px 5px;border-radius:4px'
  if (typeof opts == 'string') console.log(`%c${opts}`, defaultStyle, ...args)
  else if (!opts) console.log(...args)
  else if (typeof opts == 'object') {
    const { label, style } = opts
    console.log(`%c${label}`, style, ...args)
  }
}

/**
 * safetyLength
 */
