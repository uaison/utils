/**
 * 传入数字和小数位数，返回千分制格式，逢千位逗号隔开
 *
 * @param {number} num: 要转换的数字
 * @param {number} fixed: 小数位数
 * @return {string}
 */
function numberSplit(num, fixed=0){
  str = num+'';
  if(str.indexOf('.')>-1){
    let inte = str.split('.')[0];
    let dotted = str.split('.')[1];
    let  float = inte.split('').reverse().join('').replace(/(\d{3})/g,"$1,").split('').reverse().join('') + "."+ dotted.slice(0,fixed);
    if(float.startsWith(',')){float = float.substr(1)}
    return float
  }
  let integ = str.split('').reverse().join('').replace(/(\d{3})/g,"$1,").split('').reverse().join('');
  if(integ.startsWith(',')){integ = integ.substr(1)}
  return integ + (fixed>0?'.':'') + "00000000".slice(0,fixed);
}

/**
 * 参数对象列化为key1=value1&key2=value2形式
 *
 * @param {object} data: 参数对象
 * @return {string}
 */
function objectStringify(data={}){
  if(typeof data !== 'object') return data;
  if(data === null) return '';
  let keys = Object.keys(data);
  return keys.map(key => `${key}=${JSON.stringify(data[key])}`).join('&');
}

/**
 * 实现异步ajax请求
 *
 * @param {object} data: 参数对象
 */
function Ajax() {
  let XHR;
  if(window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
  } else if(window.ActiveXObject){
    XHR = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 发送请求
  function send({url, method='GET', data=null, async=rue, header={'Content-Type':'application/x-www-form-urlencoded' }}) {
    let URL = url;
    const METHOD = method.toUpperCase();

    if(METHOD === 'GET') {
      // GET请求参数序列化到url上
      let params = objectStringify(data);
      URL = [URL, params].join('?');
      data = null;
    } else if(header['Content-Type'].toLowerCase() === "application/x-www-form-urlencoded") {
      // 请求数据格式位application/x-www-form-urlencoded时，传参data序列化
      data = objectStringify(data);
    }
    return new Promise((resolve, reject) => {
      XHR.open(METHOD, URL, async);
      let keys = Object.keys(header);
      keys.forEach(key => {
        // 设置请求头信息
        XHR.setRequestHeader(key, header[key]);
      });
      XHR.send(data);
      if(XHR.status !=200){
        reject(XHR.responseText);
      } else {
        if (XHR.readyState ==4){
          resolve(XHR.responseText);
        }
      }
    })
  }

  return {
    send: send
  }
}

/**
 * 冒泡排序法
 * @param {number[]} arr: 要排序的数组
 * @return {number[]}
 */
function bubleSort(arr) {
  let len = arr.length;
  for(let outer = len; outer >= 2; outer --){
    for(let inner = 0; inner < len-1; inner ++) {
      if(arr[inner] < arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
    }
  }
  return arr;
}

/**
 * 选择排序法
 * @param {number[]} arr: 要排序的数组
 * @return {number[]}
 */
 function selectSort(arr) {
  let len = arr.length;
  for(let i = 0; i < len - 1; i++) {
    for( let j = i; j< len; j++) {
      if(arr[i] < arr [j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
 }


export default = {
  numberSplit,
  ajax,
  bubleSort,
  selectSort
}
