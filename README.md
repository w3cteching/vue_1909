一、重新认识vue-cli

1. 安装最新版本脚手架

```
vue-cli官网:https://cli.vuejs.org/zh/

目前版本：v4.5.x

安装：npm install -g @vue/cli

```

2.使用vue脚手架创建项目

```
第一种命令行
vue create 项目名（字母开头，不要大写） 回车

default (自动安装)
manually （建议：手动安装）

第二种：以图形界面方式创建
vue ui 

```

3.vue-cli4.5目录结构

```
public
	index.html ---入口html页面
	静态资源--json文件
src
	assets:资源文件（字体，图标，图片）'
	components:存放公共组件
	router:路由文件
	store:存放vuex状态管理
	views:存放页面
	filters:存放过滤器文件
	directives:存放自定义指令文件夹
	mixins:存放混入方法
	utils:存放一些封装的公共方法(js文件)
	http:存放封装的http接口请求
	App.vue 根组件
	main.js 项目执行的入口js
	
.gitignore:git提交时忽略文件
.babel.config.js babel配置文件
.eslintrc.js  EsLint配置文件（代码质量检查配置）
package.json  node配置依赖文件
README.MD 项目的说明文档
vue.config.js 配置webpack环境

	禁用Eslint代码检查：


```



4.项目开发前的环境准备

```
初始样式
reset.css

适配环境：rem,vw,vh,flex

xxxrem=xxxpx/html根字号

例如：0.44rem=44px/100

px转vw,rem的插件：

   @moohng/postcss-px2vw
   
npm地址：https://www.npmjs.com/package/@moohng/postcss-px2vw

安装：
npm install @moohng/postcss-px2vw --save-dev

svg图标：放大不失真，可以通过css来调整样式

1.直接复制svg代码，缺点：代码量比较大  <svg><path></path></svg>
2.直接当作img图片来处理
3.svg sprites: svg 雪碧图

```



```
每时每课移动官网参考：https://wap.365msmk.com/

拼接规则：Bearer Token值 【Bearer 和token 中间有个空格】

最终token:
token="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LjM2NW1zbWsuY29tL2FwaS9hcHAvbG9naW4iLCJpYXQiOjE1OTc3MzU5MDgsImV4cCI6MTU5ODAzODMwOCwibmJmIjoxNTk3NzM1OTA4LCJqdGkiOiJ5cHprUEZoR2tPNG12dUJtIiwic3ViIjoxMDM1LCJwcnYiOiI5ZjFmZTllMGRmZmJlNDQ0MmRjNzgzMTA3NTFmNTkxY2Y0ZDE0MDIwIn0.83iYh0sl_2nLYtuS2sYrdG-KqxT8RUFCY6GXuYNLcuE"

用户登录返回的信息如下：

其中：remember_token是登录后返回的token

{
    "code": 200,
    "msg": "操作成功",
    "data": {
        "id": 1035,
        "login_name": "ZYWX_cZTZaG",
        "nickname": "187****7036",
        "password": "$2y$10$0fevJTLyNT509V2ZQvQfk.Z2usUlwJeG5.c76MjeQzBVuvWc8IOt6",
        "email": "",
        "avatar": "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg",
        "remember_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vd3d3LjM2NW1zbWsuY29tL2FwaS9hcHAvbG9naW4iLCJpYXQiOjE1OTc3MzU5MDgsImV4cCI6MTU5ODAzODMwOCwibmJmIjoxNTk3NzM1OTA4LCJqdGkiOiJ5cHprUEZoR2tPNG12dUJtIiwic3ViIjoxMDM1LCJwcnYiOiI5ZjFmZTllMGRmZmJlNDQ0MmRjNzgzMTA3NTFmNTkxY2Y0ZDE0MDIwIn0.83iYh0sl_2nLYtuS2sYrdG-KqxT8RUFCY6GXuYNLcuE",
        "id_card": "0",
        "mobile": "18738767036",
        "sex": 3,
        "birthday": "0",
        "is_new": 1,
        "is_buy": 2,
        "wx_openid": "",
        "qq_openid": "",
        "integral": 0,
        "user_from": "PC",
        "province_id": 0,
        "city_id": 0,
        "district_id": 0,
        "last_login_ip": "100.120.136.93",
        "last_login_time": 1597735908,
        "status": 1,
        "created_at": "1597735908",
        "updated_at": "1597735908",
        "deleted_at": 0,
        "inviter_id": 0,
        "is_fill_information": 0,
        "meaage_openid": "0",
        "tube_teacher": "",
        "tube_teacher_id": 0,
        "is_remove_error_ques": 0,
        "source": "自行注册",
        "join_status": 0,
        "public_ocean": 0,
        "last_talk_at": 0,
        "uid": ""
    }
}


登录接口：

1.获取验证码：
  接口地址：https://www.365msmk.com/api/app/smsCode
  请求方式：POST
  请求参数：
    mobile: 手机号
    sms_type: 验证码类型  "login" 用于登录
    
2.登录：
接口地址：https://www.365msmk.com/api/app/login
  请求方式：POST
  请求参数：
   mobile: 手机号
   sms_code: 获取到的验证码
   type: 2  1：账号密码登录  2：短信验证码登录
    
3.获取用户信息：
接口地址：https://www.365msmk.com/api/app/userInfo
  请求方式：POST
  请求参数：
   mobile: 手机号
   sms_code: 获取到的验证码
   type: 2  1：账号密码登录  2：短信验证码登录
   
   
   
id	int	用户ID
nickname	string	用户昵称
sex	int	0 男 1女 3保密
birthday	string	生日
avatar	string	用户头像
mobile	int	手机号
province_id	int	省
city_id	int	市
district_id	int	区
is_vip	int	是否会员1是0否
vip	array	会员信息
vip_end_at	string	会员结束时间
province_name	string	省名称
city_name	string	市名称
district_name	string	区名称
attr_id	int	属性ID
attr_val_id	int	属性值ID
attr	string	属性名称
attr_value	string	属性值名称

4.课程分类

请求地址：https://www.365msmk.com/api/app/courseClassify?
请求方式：GET
    
5.课程列表接口
请求地址：https://www.365msmk.com/api/app/courseBasis
请求方式：GET

请求参数：
course_type	是	int	课程类型 10图文, 2大班课, 3小班课, 5视频课,8音频课, 9系统课
is_vip	否	int	1 会员课
classify_id	否	int	课程分类ID
limit	是	int	当页数量
page	是	int	页码
attr_val_id	否	string	属性ID，多个之间用逗号连接
keywords	否	string	课程名称搜索
order_by	否	int	1:最新 2:最热 3:价格升序 4:价格降序

6.课程详情
接口地址：https://www.365msmk.com/api/app/courseInfo/basis_id=课程id
请求方式：GET

返回的参数说明：
参数名	类型	说明
id	int	课程ID
title	string	课程标题
course_type	int	课程类型
course_classify_id	int	课程分类ID
price	int	价格
underlined_price	int	划线价格
sale_type	int	1:收费0:免费
status	int	状态
browse_base	int	浏览基数
sales_base	int	销售基数
browse_num	int	浏览数
created_at	int	创建时间
start_play_date	int	开始时间
end_play_date	int	结束时间
store_num	int	原始库存 (卖出数量+剩余库存 )
sales_num	int	卖出数量
classify_title	string	分类名称
course_details	string	课程详情
total_periods	int	课时
is_free	int	是否免费 1是
is_vip_course	int	1:会员课 0:非会员课
stock	int	剩余库存信息
is_playback	int	是否可以回放
is_collect	int	是否收藏 1:收藏
collect_id	int	收藏ID
is_vip_user	int	是否是会员 1:是
vip_user_end	string	会员到期日 如果是会员的话会有到期日
is_vip_course	int	是否是会员课程 1:是
is_join_study	int	是否加入学习 1:是

7.收藏
请求地址：https://www.365msmk.com/api/app/collect
请求方式：POST
请求参数：
page	是	int’	当前页码数
limit	否	int	每页显示数量
type	否	int	类型 1.课程 2.文库 3.图书 4.资讯 5.话题 6.面授 (不传则查询全部,目前只有课程收藏)

8.首页下面的课程列表
接口地址：https://www.365msmk.com/api/app/recommend/appIndex
请求方式：GET

```

```
axios官方：https://github.com/axios/axios

axios.get(url).then()
axios.post()
axios.put()
axois.delete()

axios({
	url:'',
	headers:{},
	data:{},  //post,PUT,DELETE,PATCH
	params:{}  //get

})


axios.get('',{headers:{}})

```

---



# 一、axios数据请求封装

- env.js
- request.js
- api.js

# 二、生产环境，开发环境切换

1.第一种方法：通过配置.env文件来实现

```
参考：https://cli.vuejs.org/zh/guide/mode-and-env.html
```

2. 第二种方法
    - 第一步：通过创建不同环境js文件，再通过cross-env来切换

```
 config
    dev.js
    
    prod.js
    

dev.js
module.exports = {
  BASE_URL: "https://test.365msmk.com"
};

prod.js

module.exports = {
  BASE_URL: "https://www.365msmk.com"
};


```

- 第二步：安装cross-env并在package.json中配置要传递的参数

```
npm install cross-env -D

package.json中配置

"scripts": {
    "serve": "cross-env BUILD_ENV=dev vue-cli-service serve",
    "build": "cross-env BUILD_ENV=prod vue-cli-service build"
  }
```

- 第三步：修改vue.config.js添加对webpack的配置

```
module.exports = {
 .....
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]['process.env'].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV);
      return args;
    });
  }
};

```

- 在业务代码做环境的切换

```
//读取process.env常量对象中的BUILD_ENV
const envType = process.env.BUILD_ENV;

const urlObj = require(`../config/${envType}.js`);

//创建一个axios实例
const service = axios.create({
  baseURL: urlObj.BASE_URL + vipUrl
});


```



# 三、过滤器与moment日期库的使用

- 过滤器

    ```
    1.全局过滤器
    
    定义：
      Vue.filter('过滤器名称',function(a,b,c) {
         
          //....
          
         return ...
      
      
      })
      
      使用：
      
      {{ num | 过滤器名称(v1,v2) }}
      
    
    
    2.局部过滤器
    
    3.总结：过滤器使用场景：用于将后台数据处理成用户最终显示的数据格式
    
    例如：性别，支付状态，物流状态，时间戳。。。。。。
    
    ```

    

- moment

```
moment官网：http://momentjs.cn/docs/
npm i moment

 格式： moment(时间戳).format("YYYY年MM月DD日，HH时mm分SS秒");
 
 格式显示：http://momentjs.cn/docs/#/displaying/
```


