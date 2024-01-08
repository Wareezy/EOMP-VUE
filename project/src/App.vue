<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/testimonial">Testimonial</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <Navbar/>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue'

export default{
  components:{
    Navbar
  }
}
</script>

<style>


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
   
  }
body{
  background-color: black;
}

</style>
