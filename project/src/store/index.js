import { createStore } from 'vuex'

const dataUrl='https://wareezy.github.io/vueData/'
export default createStore({
  state: {
home:[],
about:[],
testimonials:[],
projects:[],
education:[],
skills:[],
resumeContact:[]
    
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
    },
    setProjects(state,value){
      state.projects=value
    },
    setEducation(state,value){
      state.education=value
    },
    setSkills(state,value){
      state.skills=value
    },
    setResumeContact(state,value){
      state.resumeContact=value
    },
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
      try{
    let res=await fetch(dataUrl)
    let {about}=await res.json()
    context.commit('setAbout',about)
  }
  catch(error){
    console.error('There was an error when fetching this particular data', error)
  }
    
},

async fetchTestimonials(context){
  try{  
    let res=await fetch(dataUrl)
  let {testimonials}=await res.json()
  context.commit('setTestimonials',testimonials)
}
catch(error){
  console.error('There was an error when fetching this particular data', error)
}

},

async fetchProjects(context){
  try{
    let res=await fetch(dataUrl)
  let {projects}=await res.json()
  context.commit('setProjects',projects)
}
catch(error){
  console.error('There was an error when fetching this particular data', error)
}
  
},


async fetchEducation(context){
  try{
    let res=await fetch(dataUrl)
  let {education}=await res.json()
  context.commit('setEducation',education)
}
catch(error){
  console.error('There was an error when fetching this particular data', error)
}
  
},

async fetchResumeContact(context){
  try{
    let res=await fetch(dataUrl)
  let {resumeContact}=await res.json()
  context.commit('setResumeContact',resumeContact)
}
catch(error){
  console.error('There was an error when fetching this particular data', error)
}
  
},



async fetchSkills(context){
  try{
    let res=await fetch(dataUrl)
  let {skills}=await res.json()
  context.commit('setSkills',skills)
}
catch(error){
  console.error('There was an error when fetching this particular data', error)
}
  
},



  },
  
  modules: {
  }
})
