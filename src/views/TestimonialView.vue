<template>
  <div>
    <div v-if="testimonials && testimonials.length > 0">
      <!-- this chunk of code is only used to call and display the 1 object which is found in the testimonials array -->
      <div class="textHome" v-if="testimonials[0].title && testimonials[0].description">
        <div>
          <!-- here we are actually displaying it when calling the array testimonials we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
          <h1 id="title">{{ testimonials[0].title }}</h1>
        </div>
        <div>
          <h1 id="titleDescription">{{ testimonials[0].description }}</h1>
        </div>
      </div>
      <!-- now when we start with the second v-for i call the "info in testimonials" but what i also used was a .slice(1) which tells the software

to only start looping from that point onwards
-->
      <div class="grids">
        <div class="row">
          <div class="col-md-4" v-for="info in testimonials.slice(1)" :key="info.fullname">
            <div class="card mb-4" style="width:18rem;">
              <img id="testimonialImage" :src="info.profile" alt="Cover Image">
              <div class="card-body">
                <h2 class="card-title">{{ info.fullname }}</h2>
                <h5>{{ info.title }}</h5>
                <p class="card-text">{{ info.quotes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="spinner-border"></p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  },
};
</script>
<style>
.grids {
  margin-left: 150px;
}

#title {
  position: absolute;
  margin-top: -230px;
  margin-left: 650px;
}

#titleDescription {
  position: absolute;
  margin-top: -140px;
  margin-left: 450px;
  font-size: 28px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-4 {
  display: flex;
  flex-direction: column;
}

.card {
  flex: 1;
}

@media (max-width: 400px) {
  #title {
    margin-left: 110px;
  }

  #titleDescription {
    margin-left: 10px;
    font-size: 20px;
  }

  .grids {
    margin-top: 300px;
    margin-left: 100px;
  }
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  /* Increase the scale on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow on hover */
}
.card {
  flex: 1;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: -5px; /* Adjust as needed */
  left: -5px; /* Adjust as needed */
  right: -5px; /* Adjust as needed */
  bottom: -5px; /* Adjust as needed */
  border: 2px solid transparent;
  z-index: -1; /* Push the pseudo-element behind the card content */
  border-radius: 10px;
  animation: glow 2s infinite alternate;
  /* Apply pulsating glow animation */
}

@keyframes glow {
  0% {
    border-color: rgba(255, 165, 0, 0.7);
    /* Start with a visible orange border */
    box-shadow: 0 0 10px 0 rgba(255, 165, 0, 0.7);
    /* Initial shadow */
  }
  100% {
    border-color: rgba(255, 165, 0, 0);
    /* Fade out the border color */
    box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0);
    /* Increase shadow size to create pulsating glow effect */
  }
}
</style>