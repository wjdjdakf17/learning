<template id="app">
  컴포넌트를 등록할 때 data속성은 함수로 사용하는 것이 권장
  :=> 보통 공통으로 컴포넌트를 사용하기에 각 인스턴스가 고유한 상태 유지를 위해 
  함수로 사용할 경우 각 컴포넌트 인스턴스마다 새로운 데이터 객체가 생성되므로 독립관리
  Vue.component는 글로벌 아이템

  => 전역으로 등록 되며 최종 빌드에 들어가 메모리 낭비가 있음
  
  <make-button></make-button>
</template>
<script>
//전역
  Vue.component(make-button,{
    template : `{
      <div> //하나의 코드 내에 들어가야함
        <another-component></another-component>
        <button @click="changeBtn">{{name}}</button>  
      </div>
    }`,
    data(){
      return {
        name:'name'
      }
    },
    methods: {
      changeBtn(){
        this.name = 'change name'
      }
    }
  })
  //지역
  const hello = {
    template: `<div>text</div>` 
  }
  //컴포넌트의 컴포넌트로 사용 가능
  const makeButton={
    component:{
      'hello':hello,
    }
    template : `{
      <div> //하나의 코드 내에 들어가야함
        <another-component></another-component>
        <button @click="changeBtn">{{name}}</button>  
      </div>
    }`,
    data(){
      return {
        name:'name'
      }
    },
    methods: {
      changeBtn(){
        this.name = 'change name'
      }
    }
  }

  const app = new Vue({
    el:'app',
    component:{
      'makeButton' : makeButton,
      //이렇게 하면 app 인스턴스에서 makeButton컴포넌트 사용가능
    }
  })
</script>


