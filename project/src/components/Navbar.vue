<template>
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img id="logo" src="https://i.imgur.com/9aCiQmp.png" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/" exact
            active-class="router-link-active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/testimonial">Testimonial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/contact">Contact</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" id="logoPos" >
                    <li class="nav-item">
                        <a id="github" class="fab fa-github" href="https://github.com/Wareezy">
                            <!-- <img src="https://i.imgur.com/A2e3hZ8.png" id="logoImg1" > -->
                        </a>
                    </li>
                    <li class="nav-item">
                        <a id="linked" class="fab fa-linkedin" href="https://www.linkedin.com/in/warren-jaftha-b36338208">
                            <!-- <img src="https://i.imgur.com/aI6gALz.png" id="logoImg2"> -->
                        </a>
                    </li>
                </ul>
    </div>
  </div>
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

  nav a{
     font-weight: bold; 
    display: inline-block;
 position: relative;
 color: white ;
 font-size:20px;
 text-decoration: none;
 margin: 0 10px;
 transition: color 0.3s ease-in-out;
  }

nav a.router-link-active {
  color: orange;
}

  /* nav a:hover {
    color: orangered; 
  }  */
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
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7);
  }
  100% {
    transform: scale(1);
  }
}
#logo{
  width:100px;
  height:100px;
  animation: pulsate 2s infinite;
}
#logoImg1{
  
  width:55px;
  height:32px;
}
#logoImg2{
width:45px;
  height:45px;
  margin-top:-7px;
}

#github{
  font-size:40px;
}
#linked{
  font-size: 40px;
}
</style>