import { createStore } from 'vuex'

const dataUrl='https://wareezy.github.io/vueData/'
export default createStore({
  state: {
home:[],
about:[],
testimonials:[],
    
  },
  getters: {
  },
  mutations: {
    setHome(state,value){
      state.home=value
    },
    setAbout(state,value){
      state.about=value
    },
    setTestimonials(state,value){
      state.testimonials=value
    }
  },
  actions: {
    async fetchHome(context){
      try{
        let res=await fetch(dataUrl)
      let {home}=await res.json()
      context.commit('setHome',home)
    }
    catch(error){
      console.error('There was an error when fetching this particular data', error)
    }
      
    },
    async fetchAbout(context){
    let res=await fetch(dataUrl)
    let {about}=await res.json()
    context.commit('setAbout',about)
},



async fetchTestimonials(context){
  let res=await fetch(dataUrl)
  let {testimonials}=await res.json()
  context.commit('setTestimonials',testimonials)
}
  },
  
  modules: {
  }
})
