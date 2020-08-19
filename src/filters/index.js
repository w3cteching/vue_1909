import moment from "moment";
moment.locale("zh-cn");

//定义处理日期的全局过滤器
// Vue.filter("dateTime", function (v1) {

//   const result = moment(v1*1000).format("YYYY年MM月DD日，HH时mm分SS秒");

//   return result;
// });

//处理日期
export function dateTime(v1) {
  const result = moment(v1 * 1000).format("YYYY年MM月DD日，HH时mm分SS秒");
  return result;
}

//处理性别
export function sex(v1) {
  if (v1 == 0) {
    return "男";
  }

  if (v1 === 1) {
    return "女";
  }
}

//处理物流状态

