

<!-- v-if , v-show -->
<template>
  <div id="app">
    <!-- person은 반복되는 배열 별칭 people은 원본 데이터 배열 -->
    <!-- v-for="(item, index) in items" -->
    <div v-for="person in people">
        {{person.name}} {{person.age}}
    </div>
  </div>
</template>
<script>
  new Vue({
    el:'#app',
    data:{
      people: [
        {name:'a', age:1},
        {name:'b', age:2},
        {name:'c', age:3}
      ]
    },
    methods:{
    },
    watch:{
    }
  });

  // v-show가 있는 엘리먼트는 항상 렌더링 되고 
  //DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.

  const obj = { a: 1, b: 2, c: 3, d:{ab:1,bc:2}};
</script>