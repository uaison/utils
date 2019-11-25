/**
 * 创建一个新的日期对象
 * @param {*} dt 入参为日期类型、时间戳、字符串
 * @return {Date} 返回新创建的日期对象
 */
function createDate(dt) {
    switch (Object.prototype.toString.call(dt)) {
        case '[object Date]':
        case '[object Number]':
            return new Date(dt);
        default:
            return new Date(dt.replace(/-/g, '/'));
    }
}

// 日期运算-按年加减，传负数为减法
Date.prototype.addYear = Date.prototype.addYear || function(count) {
    this.setFullYear(this.getFullYear() + count);
    return this;
};
// 日期运算-按月份加减，传负数为减法
Date.prototype.addMonth = Date.prototype.addMonth || function(count) {
    this.setMonth(this.getMonth() + count);
    return this;
};
// 日期运算-按日期加减，传负数为减法
Date.prototype.addDay = Date.prototype.addDay || function(count) {
    this.setDate(this.getDate() + count);
    return this;
};
// 日期运算-按小时加减，传负数为减法
Date.prototype.addHour = Date.prototype.addHour || function(count) {
    this.setHours(this.getHours() + count);
    return this;
};
// 日期运算-按分钟加减，传负数为减法
Date.prototype.addMinute = Date.prototype.addMinute || function(count) {
    this.setMinutes(this.getMinutes() + count);
    return this;
};
// 日期运算-按秒加减，传负数为减法
Date.prototype.addSecond = Date.prototype.addSecond || function(count) {
    this.setSeconds(this.getSeconds() + count);
    return this;
};
/**
 * 日期按指定单位加法
 * @param count {Number} 加数
 * @param subtractType {String} 运算单位，可选：year,month,day,hour,minute,second
 * @type {Function}
 * @return {Date} 计算结果日期对象
 */
Date.prototype.add = Date.prototype.add || function ( count=0, addType="day") {
    switch(addType) {
        case "year":
            this.addYear(count);
            break;
        case "month":
            this.addMonth(count);
            break;
        case "day":
            this.addDay(count);
            break;
        case "hour":
            this.addHour(count);
            break;
        case "minute":
            this.addMinute(count);
            break;
        case "second":
            this.addSecond(count);
            break;
        default:
    }
    return this;
};

/**
 * 日期按指定单位减法
 * @param count {Number} 减数
 * @param subtractType {String} 运算单位，可选：year,month,day,hour,minute,second
 * @type {Function}
 * @return {Date} 计算结果日期对象
 */
Date.prototype.subtract = Date.prototype.subtract || function ( count=0, subtractType="day") {
    return this.add(-count, subtractType);
};
/**
 * 获取指定日期所在季度信息
 * @type {Function}
 * @return {Number} 第几个季度 (1,2,3,4)
 */
Date.prototype.getQuarter = Date.getQuarter || function() {
    let quarter = ~~((this.getMonth()+3)/3);
    return quarter;
};
/**
 * 日期格式化
 * @type {Function}
 * @return {String} 格式化后的字符串
 */
Date.prototype.format = Date.prototype.format || function (fmt='yyyy-MM-dd HH:mm:ss') {
  let o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 返回指定日期所在月份的开始日期
 * @type {Function}
 * @return {Date} 返回指定日期所在月份的开始日期
 */
Date.prototype.getMonthStart = Date.prototype.getMonthStart || function() {
    this.setDate(1);
    this.setHours(0, 0, 0, 0);
    return this;
}

/**
 * 返回指定日期所在月份的结束日期
 * @type {Function}
 * @return {String} 返回指定日期所在月份的结束日期
 */
Date.prototype.getMonthEnd = Date.prototype.getMonthEnd || function() {
    this.add(1, 'month').setDate(0);
    this.setHours(0, 0, 0, 0);
    return this;
}
