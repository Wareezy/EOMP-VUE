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
              <router-link @click="closeNavbar" class="nav-link text-white" to="/" exact active-class="router-link-active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="closeNavbar" class="nav-link text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="closeNavbar" class="nav-link text-white" to="/resume">Education & Work Experience</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="closeNavbar" class="nav-link text-white" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="closeNavbar" class="nav-link text-white" to="/testimonial">Peer Reviews</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="closeNavbar" class="nav-link text-white" to="/contact">Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" id="logoPos">
            <li class="nav-item">
              <a id="github" class="fab fa-github" href="https://github.com/Wareezy"></a>
            </li>
            <li class="nav-item">
              <a id="linked" class="fab fa-linkedin" href="https://www.linkedin.com/in/warren-jaftha-b36338208"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeNavbar() {
      // Close the navbar when a link is clicked
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    }
  }
}
</script>

<style>
nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  display: inline-block;
  position: relative;
  color: white;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;
}

nav a.router-link-active {
  color: orange;
}

/* nav a:hover {
  color: orangered;
} */

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

#logo {
  max-width: 100px; /* Adjust maximum width */
  height: auto; /* Maintain aspect ratio */
  animation: pulsate 2s infinite; /* Apply the pulsating animation */
}

/* Adjust spacing for navbar items on smaller screens */
.navbar-nav .nav-item {
  margin-bottom: 5px; /* Adjust spacing between items */
}

/* Adjust font size and spacing for social icons on smaller screens */
#github,
#linked {
  font-size: 24px; /* Adjust icon size */
  margin: 0 5px; /* Adjust spacing between icons */
}

/* Add overflow-x hidden for small screens */
@media screen and (max-width: 400px) {
  body {
    overflow-x: hidden !important;
  }

  nav {
    padding: 30px;
  }
}
</style>
