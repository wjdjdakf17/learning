<template>
  <div>
    <label for="">Name</label>
    <!-- $emit(이벤트 이름, 전달할 데이터) -->
    <input type="text" :value="name" @input="$emit('update-name', $event)">
  </div>
</template>
<script>

export default{
  props:{
    name:{
      type:String, // type define
      required:true, // required check
      default:'' // default value
    }
  }, 
  methods:{
    // updateName(e){
    //   //$emit 부모 컴포넌트로 데이터 올리기 (이벤트 네임(작명), 데이터)
    //   this.$emit('update-name',e.target.value)
    // }
  }
}
</script>