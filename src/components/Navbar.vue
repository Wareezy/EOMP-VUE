<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img id="logo" src="https://i.imgur.com/9aCiQmp.png" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/" exact active-class="router-link-active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/resume">Education & Work Experience</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/testimonial">Peer Reviews</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="refreshPage" class="nav-link text-white" to="/contact">Contact</router-link>
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
    },
    refreshPage(event) {
      // Prevent the default router-link behavior
      event.preventDefault();
      // Get the href attribute of the clicked link
      const target = event.currentTarget.getAttribute('href');
      // Set the location to the target href and reload the page
      window.location.href = target;
      window.location.reload();
    }
  }
}
</script>
<style>
nav {
  padding: 30px;
  padding-bottom: -80px !important;
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
    /* Remove overflow-x: hidden; to allow the navbar toggler button to display properly */
    overflow-x: visible !important;
  }
  nav {
    /* Adjust padding or other styles as needed */
    padding: 10px; /* Example adjustment */
  }
  .navbar {
    max-width: 100%; /* Ensures the navbar takes full width */
    padding: 10px; /* Adjust padding as needed */
  }
}
</style>