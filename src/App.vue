<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/testimonial">Testimonial</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <Navbar></Navbar>
 <router-view/>

  <Footer></Footer>
   
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import Spinner from './components/Spinner.vue'

export default{
  components:{
    Navbar,
    Footer,
    
  }
}
</script>

<style>


#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    font-family: arapey;
   
  }
body{
  background-color: black !important;
  overflow-x: hidden; /* Add this line to remove horizontal scrolling */
  margin: 0;
    padding: 0;

}

</style>
