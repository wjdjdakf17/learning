<template>
  <div>
    <!-- 무조건 상태는 v-bind -->
    <input type="checkbox" 
      :checked="lists.checked"
      @change="toggleChecked"
    >
    <span
      :class="lists.checked ? 'text-muted':''"
      :style="lists.checked ? 'text-decoration:line-through' : ''"
    >{{lists.text}}</span>
    <button
      @click="deleteList"
    >Del</button>
  </div>
</template>
<script>
  export default{
    props:{
      lists:{
        type:Object,
        required:true
     }
    },
    // computed:{
    //   list(){
    //     return this.$store.state.list;
    //   },
    // },
    methods:{
      toggleChecked(e){
        this.$store.commit('TOGGLE_LIST',{id:this.list.id,checked:e.target.checked})
        // this.$emit('toggleChecked'
        // , { id : this.lists.id
        // , checked : e.target.checked}
        // )
      },
      deleteList(){
        //muted는 어디서나 실행 
        this.$store.commit('DELETE_LIST',this.lists.id)
        //this.$emit('deleteList',this.lists.id)
      }
    }
    
  }
</script>