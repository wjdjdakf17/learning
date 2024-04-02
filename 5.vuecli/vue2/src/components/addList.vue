<template>
  <input 
      v-model="listText"
      type="text" 
      placeholder="place-holder"
      @keyup.enter="addList"  
    >
</template>
<script>
  export default{
    data(){
      return{
        listText:'',
      }
    },
    methods:{
      addList(e){
        this.$store.dispatch('addToList', e.target.value);
        // this.$store.commit('ADD_LIST', e.target.value)
        this.listText='';
        // this.$emit('add-list',e.target.value);
        // this.listText='';
      },
    }
  }
</script>