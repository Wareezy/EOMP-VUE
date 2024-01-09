import { createStore } from 'vuex'

const dataUrl='https://wareezy.github.io/vueData/'
export default createStore({
  state: {
home:[],
about:[],
    
  },
  getters: {
  },
  mutations: {
    setHome(state,value){
      state.home=value
    },
    setAbout(state,value){
      state.about=value
    }
  },
  actions: {
    async fetchHome(context){
      let res=await fetch(dataUrl)
      let {home}=await res.json()
      context.commit('setHome',home)
    },
    async fetchAbout(context){
    let res=await fetch(dataUrl)
    let {about}=await res.json()
    context.commit('setAbout',about)
}
  },
  modules: {
  }
})
