<template>
  <div>
    Num : {{numberOfCompletedTodo}}
  </div>
</template>
<script>
  export default{
    // state import할 떄는 computed 안에 작성
    computed:{
      list(){
        return this.$store.state.list;
      },
      numberOfCompletedTodo(){
        return this.list.filter(lists => lists.checked).length;
      }
    }
  }
</script>