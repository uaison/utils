const getSec = function (str) {
    let str1 = str.substring(1, str.length) * 1;
    let str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "m") {
        return str1 * 60 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}
const cookie = {
    getCookie(name) {
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr= document.cookie.match(reg))
            return decodeURI(arr[2]);
        else
            return null;
    },
    setCookie(name,value,time) {
        let strSec = getSec(time);
        let exp = new Date();
        exp.setTime(exp.getTime() + strSec*1);
        document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toUTCString();
    },
    delCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval=this.getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toUTCString();
    }
}
Object.freeze(cookie);
export default cookie
