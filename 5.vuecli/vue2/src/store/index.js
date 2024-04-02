import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data
    list:[
      {id:0, text:'dummy', checked:false}
    ]
  },
  getters: {
    // computed와 유사
  },
  mutations: {
    // data change
    ADD_LIST(state,value){
      state.list.push(
        {id:state.list.length, text:value, checked:false}
      )
    },
    TOGGLE_LIST(state,{id,checked}){
      const index = state.list.findIndex(v=>{
        return v.id === id;
      })
      state.list[index].checked = checked;
      console.log(state.list)
    },
    DELETE_LIST(state,id){
      console.log('delete click')
      state.list = state.list.filter(v=>{
        console.log(v.id, id)
        return v.id !== id
      })
    }
  },
  actions: {
    // function
  },
  modules: {
  }
})
