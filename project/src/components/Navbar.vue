<template>
    <div>
        <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/testimonial">Testimonial</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
      nav {
    padding: 30px;

  }

  nav a {
    /* font-weight: bold; */
    display: inline-block;
 position: relative;
 color: white;
 font-size:20px;
 text-decoration: none;
 margin: 0 10px;
 transition: color 0.3s ease-in-out;
  }

  nav a.router-link-exact-active {
    color: orange;
  }

  nav a:hover {
    color: orangered; /* Change to your desired hover color */
  }
  nav a::after {
 content: '';
 position: absolute;
 width: 100%;
 height: 2px;
 bottom: 0;
 left: 0;
 background-color: orange;
 transform: scaleX(0);
 transform-origin: bottom right;
 transition: transform 0.25s ease-out;
}

nav a:hover::after {
 transform: scaleX(1);
 transform-origin: bottom left;
}
</style>