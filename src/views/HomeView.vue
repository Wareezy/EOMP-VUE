<template>
  <div >
    <!-- <div class="row" v-if="home && home.length > 0"> -->
      <!-- <div v-for="person in home" :key="person.name"> -->
        <div  class="textHome"  >
          <h2   id="homeName" data-aos="fade-up-right" data-aos-delay="400">Warren Jaftha</h2>
          <h3  id="homeTitle" data-aos="fade-up-right" data-aos-delay="600">Full-Stack Developer</h3>
          <p   id="homeDescription" data-aos="fade-up-right" data-aos-delay="800">Specializes in Web design, mobile applications and social media</p>
        </div>
        <img data-aos="fade-up-right" id="homeImage" src="https://i.imgur.com/E9oDbZd.png" alt="Cover Image">
      </div>
    <!-- </div> -->
    <!-- <div v-else> -->
      <!-- <p class="spinner-border"></p> -->
    <!-- </div> -->
  <!-- </div> -->
  <div data-aos="fade-down" data-aos-delay="800"  id="orangeBar" ></div>
</template>
<script>
export default {
  computed: {
    home() {
      return this.$store.state.home;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHome');
  },
};
</script>
<style scoped>
#orangeBar {
  height: 160px;
  margin-top: -300px;
  background-color: orange;
  box-shadow: 0 0 10px orange;
  position: relative;
  z-index: 0 !important;
}
#homeImage {
  margin-top: -280px;
  margin-right: -1160px;
  position: relative;
  z-index: 1;
}
.textHome {
  margin-top: 420px;
  margin-right: 900px;
  position: relative;
  z-index: 1;
}
#homeName {
  position: absolute;
  margin-top: -70px;
  margin-left: 80px;
  z-index: 1;
}
#homeTitle {
  position: absolute;
  margin-top: -30px;
  margin-left: 80px;
  z-index: 1;
}
#homeDescription {
  position: absolute;
  margin-top: 15px;
  margin-left: 80px;
  z-index: 1;
}
@media screen and (max-width: 400px) {
  #homeImage {
    position: relative;
    margin-top: 100px;
    margin-right: -50px;
    width: 300px;
    height: 300px;
    z-index: 1;
  }
  #orangeBar {
    height: 130px;
    width: 100% !important;
    margin-top: -230px;
    background-color: orange;
    box-shadow: 0 0 10px orange;
    position: relative;
    z-index: 0 !important;
  }
  .textHome {
    margin-top: 170px;
    margin-right: 0;
    text-align: center;
  }
  #homeName,
  #homeTitle,
  #homeDescription {
    position: relative;
    margin: 0;
    text-align: center;
  }
  body {
    overflow-x: hidden;
  }
}
</style>