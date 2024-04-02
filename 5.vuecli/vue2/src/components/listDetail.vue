<template>
   <div>
    <ListView 
      v-for="lists in list" 
      :key="lists.id"
      :lists="lists"
      :text="lists.text"
      />
   </div>
</template>
<script>
  import ListView from '@/components/ListView.vue';
  export default{
    components:{
      ListView
    },
    computed:{
      list(){
        return this.$store.state.list;
      }
    },
    // props:{
    //   lists:{
    //     type:Array,
    //     required:true
    //   }
    // },
    methods:{
      // toggleCheckBox(value){

      //   this.$emit('toggleChecked',value);
      // },
      // deleteListes(listId){
      //   console.log(listId)
      //   this.$emit('deleteList',listId)
      // }
    }

  }
</script>