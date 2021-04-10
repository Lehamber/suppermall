 
// 防抖操作
export  function debounce(func, delay = 200) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log('shuangshuagn ');
    }, delay);
  }
}
 