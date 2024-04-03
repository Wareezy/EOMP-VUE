<template>
  <div>
    <div class="row" v-if="home && home.length > 0">
      <div v-for="person in home" :key="person.name">
        <div class="textHome">
          <h2 id="homeName">{{ person.name }}</h2>
          <h3 id="homeTitle">{{ person.title }}</h3>
          <p id="homeDescription">{{ person.description }}</p>
        </div>
        <img id="homeImage" :src="person.coverImage" alt="Cover Image">
      </div>
    </div>
    <div v-else>
      <p class="spinner-border"></p>
    </div>
  </div>
  <div id="orangeBar"></div>
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
  margin-top:-300px;
  background-color: orange;
  box-shadow: 0 0 10px orange;
}
#homeImage {
  margin-top: -290px;
  margin-right: -1160px;
}

.textHome {
  margin-top: 300px;
  margin-right: 900px;
}

#homeName {
  position: absolute;
  margin-top: -70px;
  margin-left: 80px;
}

#homeTitle {
  position: absolute;
  margin-top: -30px;
  margin-left: 80px;
}

#homeDescription {
  position: absolute;
  margin-top: 15px;
  margin-left: 80px;
}


@media screen and (max-width: 400px) {
  #homeImage {
    position:relative;
    margin-top: 100px;
    margin-right: -50px;
    width: 300px;
    height: 300px;
 }

 #orangeBar {
  height: 130px;
  margin-top:-230px;
  background-color: orange;
  box-shadow: 0 0 10px orange;
}

 .textHome {
    margin-top: 100px;
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
}</style>





