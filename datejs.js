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
Date.prototype.addSecond = Date.prototype.addSecond ||| function(count) {
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
 * 获取指定日期所在季节信息
 * @type {Function}
 * @return {Object} season: '第几个季度', info: 当前季度信息
 */
Date.prototype.getSeason = Date.getSeason || function() {
    let dt = new Date(this);
    let monthArr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
    let season = ['春季','夏季','秋季','冬季'];
    let month = dt.getMonth()+1;
    let result = {};
    for(let i =0;i < 4; i++){
        if(~monthArr[i].indexOf(month)) {
            result.season = i+1;
            result.info = season[i];
            return result;
        }
    }
};