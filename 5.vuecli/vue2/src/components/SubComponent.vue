<template>
  <div>
    <em>{{title}}</em>
    <slot name="header" :slotData="slotData"></slot>
    <p>{{name}}</p>
    <a :href="url">aLink</a>
    <button @click="updatedName">updated Name !</button>
    <slot></slot>  
  </div>
</template>
<script>
  console.log('this>>')
  debugger
export default{
  //props로 받는 변수명과 data의 변수명이 겹치면 안됨
  props:{
    title:{
      type: Object,
      required:false, //props type설정, 필수여부 체크
    }
  },
  name : 'subComponent', //고유 적이며 디버깅 용으로 사용 가능
  data(){
    return{
      name : 'compName',
      url: 'about',
      slotData :'slotData'
    }
  },
  methods:{
    updatedName(){
      this.name = 'updatedName'
    }
  }
}
</script>