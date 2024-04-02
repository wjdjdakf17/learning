<template>
  <div>
    <p>{{name}}</p>
    <!-- component로 props보내기 -->
    <subComponent title="HomeTitle"/>
  </div>
</template>

<script>
// @의 역할은 src를 가르키게 댐
import subComponent from '@/components/SubComponent.vue'
export default {
  components:{
    subComponent
  },
  name:'HomeView',
  data(){
    return{
      name:'vue2',
    }
  }
}

</script>
