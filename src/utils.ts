export enum TOAST_TYPE {
  SUCCESS = 'success',
  FAIL = 'fail',
}
/**
 * toast提示
 * @param message 要显示的文本
 * @param type 成功或失败
 */
export const showToast = (message: string, type: TOAST_TYPE = TOAST_TYPE.SUCCESS) => {
  let ele: any = document.createElement('div')
  const toastDOM = `<div className="flex-1 ml-2 inline-block text-left leading-5">${message}</div>`

  ele.innerHTML = toastDOM
  ele.classList.add('toast')
  let counter: any = document.getElementById('root')
  if (counter) {
    counter.appendChild(ele)
  }

  setTimeout(() => {
    if (counter) {
      counter.removeChild(ele)
    }
    ele = null
    counter = null
  }, 1500)
}