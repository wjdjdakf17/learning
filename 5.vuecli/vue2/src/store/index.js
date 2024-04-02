import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data
    list:[
      {id:0, text:'dummy', checked:false}
    ],
    users:[]
  },
  getters: {
    // computed와 유사
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users;
    },
    //$store.commit
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
    //context, payload
    //$store.dispatch
    //context 내부에는 commit, dispatch 등 여러가지가 들어있다
    addToList({commit}, value){
      //여기서 비동기 작업
      setTimeout(()=>{
        commit('ADD_LIST',value)
      },500);
    },
    deleteList({commit},id){
      setTimeout(()=>{
        commit('DELETE_LIST',id)
      },500)
    },
    getUsers({commit}){
      axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
          commit('SET_USERS', res.data)
        });
    }
  },
  modules: {
  }
})
