<template>
  <div id="app" class="container">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/subcomponent">SubComponent</router-link>
    </nav>
    <router-view/> -->
    <h1 class="">Title</h1>
    <CompletedTodo />
    <addList />
      
    <hr>
    <listDetail />
    <!--vue의 반응형 시스템의 작동원리 때문 -->
   
  </div>
</template>
<script>
  import listDetail from '@/components/listDetail.vue'
  import addList from '@/components/addList.vue'
  import CompletedTodo from '@/components/CompletedList.vue'
  export default{
    components:{
      listDetail,
      addList,
      CompletedTodo
    },
    data(){
      return{
        // list:[
        //   {id:0, text:'list1' , checked:false},
        //   {id:1, text:'list2' , checked:false}
        // ]
      }
    },
    methods:{
      // toAddList(value){
      //   this.list.push(
      //     {id:this.list.length, text:value, checked:false}
      //   )
      //   this.listText = '';
      // },
      // 구조분해
      // toggleCheckbox({id,checked}){
      //   const index = this.list.findIndex(v=>{
      //     return v.id === id;
      //   })
      //   this.list[index].checked = checked;
      //   console.log(this.list)
      //   // this.list.forEach(v=>{
      //   //   if(this.list.id == param.id){
      //   //   }
      //   // })
      // },
      // deletedList(id){
      //   // const index = this.list.findIndex(v=>{
      //   //   return v.id === id;
      //   // })
      //   // this.list.splice(index,1)
      //   this.list = this.list.filter(v=>{
      //     return v.id !== id
      //   })
      // }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
