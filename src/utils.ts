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
  const toastDOM = `<div className="fixed left-1/2 box-border flex min-h-[58px] w-[275px] translate-x-[-50%] animate-toast items-center justify-center rounded-md bg-[rgba(0,0,0,0.7)] py-[10px] px-[15px] text-center font-bv-Regular text-sm leading-[14px] text-[#fff]">
    <div className="flex-1 ml-2 inline-block text-left leading-5">${message}</div>
  </div>`

  ele.innerHTML = toastDOM
  ele.classList.add('main_tost')
  let counter: any = document.getElementById('root')
  if (counter) {
    counter.appendChild(ele)
  }

  // setTimeout(() => {
  // if (counter) {
  //   counter.removeChild(ele)
  // }
  // ele = null
  // counter = null
  // }, 1500)
}