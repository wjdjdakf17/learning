<template>
  <div id="app">
    <template v-if="number===0">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </template>
    <div v-else-if="number===1"></div>  <!--또 다른 조건-->
    <div v-else>text</div>
    <button @click="toggleShow"></button>
  </div>
</template>
<script>
  new Vue({
    el:'#app',
    data:{
      show:true,
      number:0
    },
    methods:{
      toggleShow(){
        this.show = !this.show
      },
      increase(){
        ++this.number;
      }
    },
    watch:{

    }
  });
</script>