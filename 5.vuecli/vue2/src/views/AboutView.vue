<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>props로 자식컴포넌트에게 데이터를 전달할 떄 
      자식은 절대 데이터를 가공하지 않는다.
      데이터 가공은 부모쪽에서 한다. 그러면 자식 쪽도 자동으로
      바뀌게 되어있다.

      자식이 바꾸고 싶다면 부모컴포넌트에게 이벤트를 전달해서
      부모쪽에서 바꾸게 ! 
    </span>
    <form action="">
      <!-- 부모에서는 이벤트를 받는 것은 @니까 이벤트 네임을 받고 
        내부 메서드 함수로 데이터값 가공해주기
      -->
      <span>$emit(이벤트이름(자식에서 보낸 것이랑 동일해야함), 첫번쨰인자 ... ~)</span>
      <InputFuild :name="name" @update-name="name = $event.target.value"/>
      <button type="submit">전송</button>
    </form>
    {{name}}
    <hr/>
    <subComponent :title="obj">
      <!-- props를 받아와서 구조분해할당으로 slotData만 뽑아냄 -->
      <template #header="{slotData}">
        <div>header slot</div>
        <span>{{slotData}}</span>
      </template>
      <template #default>
        <div>footer slot</div>
      </template>
    </subComponent>
  </div>
</template>
<script>
// @는 src를 기준으로 한다.
import InputFuild from "@/components/InputFuild.vue"
import subComponent from "@/components/SubComponent.vue"
export default{
  components:{
    InputFuild,
    subComponent
  },
  data(){
    return{
      name:'',
      obj:{
        a:1,b:2,c:3
      }
    }
  },
  methods:{
    //위에서 함수를 실행시키면 인자로 넘겨온 value값 받음
    // updateName(name){
    //   this.name = name
    // }
  }
}
</script>