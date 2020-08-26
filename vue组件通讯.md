# 一、vue组件通讯

1. 父子通讯

```
**** 父->子：主要通过props实现

  props:支持数组和对象两种接收形式

单向数据流:
只能父->子级->子级的子级，而不能子级改变父级

注意：如果要接收的props值进行修改，则通常把props接收的值处理成data变量或computed计算属性

难道子级真的不难改变父级了吗？？
1.利用对象特性--浅复制
2.利用vue中的sync和$emit实现

父组件中：
 <a-com :msg.sync="msg"></a-com>
 
子组件中：
  this.$emit('update:msg','全栈1909A')
  
***子->父：主要通过$emit实现

this.$emit('向父级派发的事件名',要传递的值)

面试官：
如何在父组件中调用子组件的方法

1.通过ref给子组件命名，再调用
	this.$refs.a.clickMe()
2.通过$children

this.$children[0].clickMe()

如何在子组件中调用父组队的方法

  this.$parent


```

2. 隔代通讯

```
***provide:提供服务

1.通过对象提供
export default {
  name: "app",
  provide:{ money:1000000 },
  data() {
    return {}
}
2.通过函数提供
export default {
  name: "app",
  provide(){
    return {
      app:this
    }
  },
  data() {
    return {}
}

***inject:消费服务
export default {
  name: "bcom",
  inject: ["app"]
}

*** $attrs和$listeners

$attrs将祖仙元素的数据，传递给后代元素
$listeners:通过后代派发事件，中间组件通过$listeners传递，在祖仙元素监听触发

vuex:

 
```



3. 兄弟通讯

```
bus方法
vuex
通过公共父级组件当桥梁传递
```





# 二、生成二维码

```
安装：
npm install --save qrcode
引入:
import QRCode from 'qrcode'
 
 
 <temppate>
 
   <div>
      <img :src="imrUrl">
   </div>
 
 </template>
 
//触发事件调用下面的方法
// With promises
QRCode.toDataURL('http://jd.com/')
  .then(url => {
    console.log(url)
    this.imrUrl=url;
  })
  .catch(err => {
    console.error(err)
  })
```

# 三、拖拽

1.单个dom拖拽

```
draggable
https://www.npmjs.com/package/draggable

import Draggable from 'draggable'

<template>

<div  ref="box"></div>

</template>

mounted() {

   this.drag()
},
methods:{

  drag() {
  
   var element = this.$refs.box
   new Draggable (element);
  }
}

```

2.列表或表格list形式拖拽

```
sortablejs:
https://www.npmjs.com/package/sortablejs


/**
 * sortablejs多重拖拽总结：
 * 第一步：先安装
 *   npm install sortablejs -S;
 * 第二步：在要使用的组件中添加,下在两行代码
 *  import { Sortable, MultiDrag } from 'sortablejs';
 *  Sortable.mount(new MultiDrag()); //关键
 * 第三步：给要拖拽的ul或div（父级）注意是父级元素添加ref,例如：<ul ref="list">
 * 第四步：在mounted生命周期中配置拖拽选项即可
 * 
 * mounted() {
    let el = this.$refs.list;
    Sortable.create(el, {
      multiDrag: true, //开启多重拖拽，关键
      selectedClass: "selected", //设置拖拽的样式类
      animation: 150,
    });
  }
 * 
 */

```

# 四、递归组件

```
5!=5*4*3*2*1

5*4
4*3
3*2
2*1

斐波那契数列
1,1,2,3,5,8,13,.....
递归：即函数自身调用函数自身
递归使用条件：
1.可以把复杂的问题用简单的步骤来描述   f(n-1)+f(n-2)
2.有一个结束递归的条件  if(n===1) return 1;
```

```
JSON数据树形结构：
let jsonObj={
    books:[
       {id:1001,name:'一级菜单01',children:[
       		{id:100001,pid:1001,name:'二级菜单01'},
       		{id:100002,pid:1001,name:'二级菜单02'},
       		{id:100003,pid:1001,name:'二级菜单03'},]},
       {id:1002,name:'一级菜单02',children:[]},
       {id:1003,name:'一级菜单03':children:[]}
    ]


}
```



v-model本质上是什么，或谁的语法糖

```
v-model本质上是用value属性,input事件实现的

实现原理：Object.defineProperty()
```



混入：mixin

```
适用场景：主要用于需要对多个组件中相同的方法或数据的抽离

步骤：
第一步：创建mixins JS文件

//import {  getUserList} '@/http/'

var GetUserDataMixIn = {
    data() {
        return {msg:'hello 1909A'}
     },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      console.log("调用后台用户数据的方法");
    }
  }
};

export default GetUserDataMixIn;


第二步：在需要的组件中混入相关mixin文件
import GetUserDataMixIn from '@/mixins/getData'
export default {
  ....
  mixins:[GetUserDataMixIn],
  data() {}
  
 }
```





```
H5 拍照

<input type="file">

<input type="file" capture="camera" accept="image/*" id="filetest" name="filetest">
```

