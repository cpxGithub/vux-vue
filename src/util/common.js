let setTitle = title => {
  document.title = title
  let mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement('iframe')
    iframe.style.visibility = 'hidden'
    iframe.setAttribute('src', '/static/img/close.png')
    let iframeCallback = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

let add = (arg1, arg2) => {
  let r1
  let r2
  let m
  let c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}

let sub = (arg1, arg2) => {
  let r1
  let r2
  let m
  let n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}

let mul = (arg1, arg2) => {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}

let div = (arg1, arg2) => {
  let t1 = 0
  let t2 = 0
  let r1
  let r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

export default {
  setTitle,
  add, // 加
  sub, // 减
  mul, // 乘
  div // 除
}
